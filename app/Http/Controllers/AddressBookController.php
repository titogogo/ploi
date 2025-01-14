<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAddressBookRequest;
use App\Models\AddressBook;
use App\Models\Contact;
use App\Models\Gateway;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class AddressBookController
{
    public function index(Request $request)
    {
        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('notes', 'LIKE', "%{$value}%");
                });
            });
        });

        $addressBooks = QueryBuilder::for(AddressBook::class)
            ->withCount('contacts')
            ->defaultSort('-id')
            ->allowedSorts(['name', 'contacts_count'])
            ->allowedFilters([$globalSearch])
            ->where('user_id', auth()->id())
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('AddressBook/Index', compact('addressBooks'));
    }

    public function show(AddressBook $addressBook)
    {
        abort_unless($addressBook->id === auth()->id(), 403);

        if (!$addressBook->relationLoaded('contacts'))
            $addressBook->load('contacts');

        return Inertia::render('AddressBook/Show', compact('addressBook'));
    }

    public function create()
    {
        return Inertia::render('AddressBook/Create');
    }

    public function store(CreateAddressBookRequest $request)
    {
        $contacts = collect();

        /**
         * @var $file UploadedFile
         */
        foreach ($request->allFiles()['files'] as $file) {
            $fileName = auth()->id() . '-' . Str::random() . '.txt';
            $filePath = $file->storeAs('contacts_files', $fileName);

            File::lines(storage_path('app/' . $filePath))->each(function ($line) use($contacts, $request) {
                $info = $line;

                if (Str::contains($line, '|'))
                    $info = explode('|', $line);
                if (Str::contains($line, ','))
                    $info = explode(',', $line);

                if (is_array($info)) {
                    if (count($info) > 1) {
                        $contactData = [
                            'name' => $info[0] ?? $request->input('name'),
                            'phone' => $info[1]
                        ];
                    } else {
                        $contactData = [
                            'name' => $request->input('name'),
                            'phone' => $info[0]
                        ];
                    }
                } else {
                    $contactData = [
                        'name' => $request->input('name'),
                        'phone' => $info
                    ];
                }

                $contacts->push(new Contact($contactData));
            });

        }

        $addressBook = AddressBook::create([
            'name' => $request->string('name')->toString(),
            'notes' => $request->string('notes')->toString(),
            'user_id' => auth()->id(),
        ]);

        $addressBook->contacts()->saveMany($contacts);

        return redirect(route('address-books.show', $addressBook));
    }

    public function edit()
    {

    }

    public function destroy(AddressBook $addressBook)
    {
        abort_unless($addressBook->id === auth()->id(), 403);

        $addressBook->delete();

        return redirect(route('address-books.index'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCoverageRequest;
use App\Models\Gateway;
use App\Models\Rate;
use App\Services\CountriesService;
use Giggsey\Locale\Locale;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use libphonenumber\PhoneNumberToCarrierMapper;
use libphonenumber\PhoneNumberUtil;
use libphonenumber\prefixmapper\PhonePrefixMap;
use libphonenumber\prefixmapper\PrefixFileReader;
use ReflectionClass;
use ReflectionProperty;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CoverageController
{
    public function index(Request $request)
    {
        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('country_name', 'LIKE', "%{$value}%")
                        ->orWhere('country_code', 'LIKE', "%{$value}%")
                        ->orWhere('type', 'LIKE', "%{$value}%")
                        ->orWhere('operator_prefix', 'LIKE', "%{$value}%");
                });
            });
        });

        $rates = QueryBuilder::for(Rate::class)
            ->allowedFilters([$globalSearch])
            ->defaultSort('country_name')
            ->allowedSorts(['country_code', 'country_name', 'operator_prefix', 'type', 'rate'])
            ->latest()
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Coverage/Index', compact('rates'));
    }

    public function create()
    {
        abort_unless(auth()->user()->admin, 404);

        $countries = CountriesService::getCountries();

        return Inertia::render('Coverage/Create', compact('countries'));
    }

    public function store(CreateCoverageRequest $request)
    {
        abort_unless(auth()->user()->admin, 404);

        $countries = CountriesService::getCountries();
        $country = $countries[$request->string('country')->toString()];

        if (!$country) {
            throw ValidationException::withMessages([
                'amount' => ['Invalid country.'],
            ]);
        }

        Rate::create([
            'country_code' => $request->string('country')->toString(),
            'country_name' => Arr::get($country, 'name', $request->string('country')->toString()),
            'operator_prefix' => $request->integer('operator_prefix'),
            'type' => $request->string('type')->toString(),
            'rate' => money($request->input('rate')),
            'created_by' => auth()->id(),
        ]);

        return redirect(route('coverage.index'));
    }

    public function destroy(Rate $coverage)
    {
        abort_unless(auth()->user()->admin, 404);

        $coverage->delete();

        return back();
    }
}

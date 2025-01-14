<?php

namespace App\Http\Controllers;

use App\Actions\CreateMessageAction;
use App\Http\Requests\SendMessageRequest;
use App\Models\AddressBook;
use App\Models\Gateway;
use App\Models\ScheduledMessage;
use App\Models\Template;
use Giggsey\Locale\Locale;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use libphonenumber\PhoneNumberToCarrierMapper;
use libphonenumber\PhoneNumberUtil;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class MessagesController
{
    public function index(Request $request)
    {
        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('text', 'LIKE', "%{$value}%")
                        ->orWhere('sender_id', 'LIKE', "%{$value}%")
                        ->orWhere('status', 'LIKE', "%{$value}%");
                });
            });
        });

        $messages = QueryBuilder::for(ScheduledMessage::where('user_id', auth()->id()))
            ->allowedFilters([$globalSearch])
            ->allowedSorts([
                'id',
                'text',
                'sender_id',
                'status',
                'type',
                'recipients_count',
                AllowedSort::field('gateway', 'gateway_id'),
            ])
            ->with('gateway')
            ->withCount('recipients')
            ->latest()
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Messages/Index', compact('messages'));
    }

    public function create()
    {
        $addressBooks = AddressBook::where('user_id', auth()->id())->withCount('contacts')->get();

        $gateways = Gateway::where('enabled', true)->get()->map(function ($gateway) {
            return [
                'id' => $gateway->id,
                'name' => $gateway->name,
            ];
        });

        $templates = Template::where('user_id', auth()->id())->get();

        return Inertia::render('Messages/Send', compact('addressBooks', 'gateways', 'templates'));
    }

    public function store(SendMessageRequest $request)
    {
        CreateMessageAction::execute($request);

        return redirect(route('messages.index'));
    }
}

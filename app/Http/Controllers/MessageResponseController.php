<?php

namespace App\Http\Controllers;

use App\Models\ScheduledMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class MessageResponseController extends Controller
{
    public function show(
        Request $request,
        ScheduledMessage $message,
    )
    {
        $responses = QueryBuilder::for($message->responses())
            ->with('recipient')
            ->defaultSort('-id')
            ->allowedSorts(['status', 'scheduled_message_recipient_id'])
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Messages/Responses', compact('responses'));
    }
}

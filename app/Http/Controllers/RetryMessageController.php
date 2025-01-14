<?php

namespace App\Http\Controllers;

use App\Jobs\SendMessageJob;
use App\Models\ScheduledMessage;

class RetryMessageController extends Controller
{
    public function __invoke(ScheduledMessage $message)
    {
        if ($message->recipients()->count() == $message->responses()->where('status', 'sent')->count()) {
            return back();
        }

        SendMessageJob::dispatch($message);

        return back();
    }
}

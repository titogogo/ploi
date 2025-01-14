<?php

namespace App\Http\Controllers;

use App\Enums\ScheduledMessageStatus;
use App\Models\ScheduledMessage;

class StopScheduledMessageController extends Controller
{
    public function __invoke(ScheduledMessage $message)
    {
        $message->update([
            'status' => ScheduledMessageStatus::STOPPING,
        ]);

        return back();
    }
}

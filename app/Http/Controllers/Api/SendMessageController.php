<?php

namespace App\Http\Controllers\Api;

use App\Actions\CreateMessageAction;
use App\Enums\MessageRecipientsType;
use App\Http\Requests\SendMessageRequest;
use App\Models\Template;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\ValidationException;

class SendMessageController
{
    public function __invoke(SendMessageRequest $request)
    {
        if (!$request->input('recipients_type')) {
            $request->merge([
                'recipients_type' => MessageRecipientsType::NUMBERS->value,
            ]);
        }

        $message = CreateMessageAction::execute($request);

        return response()->json([
            'success' => true,
            'message_id' => $message->id,
        ]);
    }
}

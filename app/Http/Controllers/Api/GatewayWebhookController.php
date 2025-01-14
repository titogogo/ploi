<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gateway;
use App\Models\MessageResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class GatewayWebhookController extends Controller
{
    public function __invoke(
        Gateway $gateway,
        Request $request,
    )
    {
        if (
            $gateway->webhook_json_message_key &&
            $gateway->json_message_key &&
            $gateway->webhook_json_status_key
        ) {
            $data = fluent($request->json());

            if (Str::contains($gateway->webhook_json_message_key, '.'))
            {
                $prop = Arr::get(explode('.', $gateway->webhook_json_message_key), 0);

                $propData = $data->get($prop);

                if (Str::contains($propData, ['{', '}'])) {
                    $propData = json_decode($propData);

                    $data = fluent([
                        $prop => $propData,
                    ]);
                }
            }

            $messageId = $data->get($gateway->webhook_json_message_key);
            $status = $data->get($gateway->webhook_json_status_key);

            MessageResponse::where('provider_message_id', $messageId)->update([
                'status' => $status,
                'webhook_payload' => $request->toArray(),
            ]);

            return response()->json([
                'success' => true
            ]);
        }

        return response()->json([
            'success' => false
        ]);
    }
}

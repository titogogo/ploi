<?php

namespace App\Jobs;

use App\Actions\CalculateMessagePrice;
use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\DelayType;
use App\Enums\GatewayType;
use App\Enums\MethodType;
use App\Enums\GatewayParamType;
use App\Enums\ScheduledMessageStatus;
use App\Models\MessageResponse;
use App\Models\ScheduledMessage;
use App\Services\SmppService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class SendMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        protected ScheduledMessage $message,
    )
    {
    }

    public function handle(): void
    {
        $message = $this->message;
        $headers = [];

        try {
            if ($message->responses()->count() > 0) {
                $message->update([
                    'status' => ScheduledMessageStatus::RETRYING,
                ]);
            } else {
                $message->update([
                    'status' => ScheduledMessageStatus::QUEUED,
                ]);
            }

            if (
                !$this->message->relationLoaded('user') ||
                !$this->message->relationLoaded('gateway') ||
                !$this->message->relationLoaded('gateway.params')
            ) {
                $this->message->load(['user', 'gateway', 'gateway.params', 'gateway.info']);
            }

            $gateway = $message->gateway;

            $recipientsCount = 0;

            if ($gateway->type === GatewayType::HTTP) {
                $params = $gateway->params;

                $http = Http::baseUrl($gateway->base_url);

                if ($gateway->authentication_type == AuthorizationType::TOKEN) {
                    $token = $gateway->params->where('type', GatewayParamType::TOKEN)->first();

                    $http = $http->withToken($token->value);
                } else if ($gateway->authentication_type == AuthorizationType::BASIC) {
                    $username = $gateway->params->where('type', GatewayParamType::USERNAME)->first();
                    $password = $gateway->params->where('type', GatewayParamType::PASSWORD)->first();

                    $http = $http->withBasicAuth($username->value, $password->value);
                } else if ($gateway->authentication_type == AuthorizationType::HEADER) {
                    $username = $gateway->params->where('type', GatewayParamType::USERNAME)->first();
                    $password = $gateway->params->where('type', GatewayParamType::PASSWORD)->first();

                    $headers[$username->name] = $username->value;
                    $headers[$password->name] = $password->value;
                }

                if ($gateway->content_type && $gateway->accept != ContentType::NONE) {
                    $http = $http->contentType($gateway->content_type->value);
                }

                if ($gateway->accept && $gateway->accept != ContentType::NONE) {
                    $http = $http->accept($gateway->accept->value);
                }

                if ($gateway->encoding && $gateway->accept != ContentType::NONE) {
                    $headers['Charset'] = $gateway->encoding->value;
                }

                if ($gateway->ignore_ssl) {
                    $http = $http->withoutVerifying()
                        ->withOptions(['verify' => false]);
                }

                $requestParams = $params->where('type', '!=', GatewayParamType::TOKEN)
                    ->where('type', '!=', GatewayParamType::USERNAME)
                    ->where('type', '!=', GatewayParamType::PASSWORD)
                    ->where('type', '!=', GatewayParamType::DESTINATION);

                $data = [];

                if ($gateway->authentication_type === AuthorizationType::PARAM) {
                    $username = $gateway->params->where('type', GatewayParamType::USERNAME)->first();
                    $password = $gateway->params->where('type', GatewayParamType::PASSWORD)->first();

                    $data[$username->name] = $username->value;
                    $data[$password->name] = $password->value;
                }

                $requestParams->each(function ($param) use ($message, &$response, &$data) {

                    if ($param->type === GatewayParamType::MESSAGE) {
                        $data[$param->name] = $message->text;
                    } else {
                        if ($param->value != null) {
                            $data[$param->name] = $param->value;
                        }
                    }
                });

                $sourceParam = $params->where('type', '==', GatewayParamType::SOURCE)->first();

                $data[$sourceParam->name] = $sourceParam->value ?? $message->sender_id;

                $message->recipients->each(function ($recipient, $key) use ($message, $gateway, $data, $http, $params, &$recipientsCount, $headers) {
                    $updatedMessage = ScheduledMessage::find($message->id);

                    if ($updatedMessage->status === ScheduledMessageStatus::STOPPING->value) {
                        $updatedMessage->update([
                            'status' => ScheduledMessageStatus::STOPPED,
                        ]);

                        $this->delete();

                        return;
                    }

                    $cost = CalculateMessagePrice::execute($message, $gateway, $recipient);

                    if ($message->user->balance->lessThan($cost)) {
                        $message->update([
                            'status' => ScheduledMessageStatus::ERROR,
                            'error' => 'insufficient funds',
                        ]);

                        $this->delete();

                        return;
                    }

                    $destinationParam = $params->where('type', GatewayParamType::DESTINATION)->first();

                    $data[$destinationParam->name] = $recipient->phone;

                    if ($gateway->method_type == MethodType::POST) {
                        //                $data = $gateway->json_encoded ? json_encode($data) : $data;

                        $response = $http->withHeaders($headers)->post($gateway->base_url, $data);
                    }

                    if ($gateway->method_type == MethodType::GET) {
                        $response = $http->withHeaders($headers)->get($gateway->base_url, $data);
                    }

                    if (isset($response) && $response->ok()) {
                        $success = Str::contains($response->body(), $gateway->success_keyword);

                        if ($success) {
                            $recipientsCount++;

                            $message->user->update([
                                'balance' => $message->user->balance->subtract($cost),
                            ]);
                        }

                        if ($this->isJson($response->body()) && $gateway->json_message_key) {
                            $data = fluent(json_decode($response->body(), true));

                            $messageId = $data->get($gateway->json_message_key);
                        }

                        MessageResponse::create([
                            'provider_message_id' => $messageId ?? 0,
                            'scheduled_message_id' => $message->id,
                            'scheduled_message_recipient_id' => $recipient->id,
                            'status' => $success ? 'sent' : 'error',
                            'gateway_id' => $gateway->id,
                            'response' => $response->body(),
                        ]);

                        if ($gateway->delay_type === DelayType::MINUTE) {
                            $delay = $gateway->delay * 60;
                        }

                        if ($gateway->delay_type === DelayType::HOUR) {
                            $delay = $gateway->delay * 60 * 60;
                        }

                        if ($gateway->delay_type === DelayType::DAY) {
                            $delay = $gateway->delay * 60 * 60 * 24;
                        }

                        if ($message->recipients->count() < $key) {
                            sleep($delay ?? 60);
                        }
                    } else {
                        MessageResponse::create([
                            'scheduled_message_id' => $message->id,
                            'scheduled_message_recipient_id' => $recipient->id,
                            'status' => 'error',
                            'gateway_id' => $gateway->id,
                            'response' => $response->body(),
                        ]);
                    }
                });
            }

            if ($gateway->type === GatewayType::SMPP) {
                $message->recipients->each(function ($recipient, $key) use ($message, $gateway, &$recipientsCount) {
                    $updatedMessage = ScheduledMessage::find($message->id);

                    if ($updatedMessage->status === ScheduledMessageStatus::STOPPING->value) {
                        $updatedMessage->update([
                            'status' => ScheduledMessageStatus::STOPPED,
                        ]);

                        $this->delete();

                        return;
                    }

                    $cost = CalculateMessagePrice::execute($message, $gateway, $recipient);

                    if ($message->user->balance->lessThan($cost)) {
                        $message->update([
                            'status' => ScheduledMessageStatus::ERROR,
                            'error' => 'insufficient funds',
                        ]);

                        $this->delete();

                        return;
                    }

                    try {
                        $phone = Str::replace('+', '', $recipient->phone);

                        $msgId = SmppService::send($gateway, $phone, $message->text, $message->sender_id);

                        $recipientsCount++;

                        $message->user->update([
                            'balance' => $message->user->balance->subtract($cost),
                        ]);

                        MessageResponse::create([
                            'provider_message_id' => $msgId,
                            'scheduled_message_id' => $message->id,
                            'scheduled_message_recipient_id' => $recipient->id,
                            'status' => 'sent',
                            'gateway_id' => $gateway->id,
                            'response' => '',
                        ]);
                    } catch (\Exception $exception) {
                        MessageResponse::create([
                            'scheduled_message_id' => $message->id,
                            'scheduled_message_recipient_id' => $recipient->id,
                            'status' => 'error',
                            'gateway_id' => $gateway->id,
                            'response' => $exception->getMessage(),
                        ]);
                    }

                    if ($gateway->delay_type === DelayType::MINUTE) {
                        $delay = $gateway->delay * 60;
                    }

                    if ($gateway->delay_type === DelayType::HOUR) {
                        $delay = $gateway->delay * 60 * 60;
                    }

                    if ($gateway->delay_type === DelayType::DAY) {
                        $delay = $gateway->delay * 60 * 60 * 24;
                    }

                    if ($message->recipients->count() < $key) {
                        sleep($delay ?? 60);
                    }
                });
            }

            if ($recipientsCount == $message->recipients->count()) {
                $message->update([
                    'status' => ScheduledMessageStatus::COMPLETED
                ]);
            } else {
                $message->update([
                    'status' => ScheduledMessageStatus::COMPLETED_WITH_ERRORS
                ]);
            }
        } catch (\Exception $exception) {
            $message->update([
                'status' => ScheduledMessageStatus::ERROR,
                'error' => $exception->getMessage(),
            ]);
        }
    }

    function isJson($string): bool
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }
}

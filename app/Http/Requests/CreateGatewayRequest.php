<?php

namespace App\Http\Requests;

use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\DelayType;
use App\Enums\EncodingType;
use App\Enums\GatewayParamType;
use App\Enums\GatewayType;
use App\Enums\MethodType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateGatewayRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
            ],
            'type' => [
                'required',
                'string',
                Rule::enum(GatewayType::class),
            ],
            'base_url' => [
                'required_if:type,http|url',
            ],
            'success_keyword' => [
                'required_if:type,http|string',
            ],
            'json_message_key' => [
                'nullable',
                'string'
            ],
            'webhook_json_message_key' => [
                'nullable',
                'string'
            ],
            'webhook_json_status_key' => [
                'nullable',
                'string'
            ],
            'method_type' => [
                'required_if:type,http|in:get,post',
            ],
            'json_encoded' => [
                'required_if:type,http',
                'bool',
            ],
            'content_type' => [
                'nullable',
                Rule::enum(ContentType::class),
            ],
            'accept' => [
                'required_if:type,http',
                Rule::enum(ContentType::class),
            ],
            'encoding_type' => [
                'required_if:type,http',
                Rule::enum(EncodingType::class),
            ],
            'ignore_ssl' => [
                'required_if:type,http',
                'bool'
            ],
            'authorization_type' => [
                'required_if:type,http',
                Rule::enum(AuthorizationType::class),
            ],
            'cost' => [
                'required',
            ],
            'limit' => [
                'required',
                'integer',
            ],
            'delay' => [
                'required',
                'integer',
            ],
            'delay_type' => [
                'required',
                Rule::enum(DelayType::class),
            ],
            'enabled' => [
                'required',
                'bool',
            ],
            'params' => [
                'required_if:type,http',
                'array'
            ],
            'params.*' => [
                'type' => [
                    'required',
                    Rule::enum(GatewayParamType::class),
                ],
                'name' => [
                    'required',
                    'string',
                ],
                'value' => [
                    'nullable',
                ]
            ],

            'ip_address' => [
                'required_if:type,smpp',
            ],
            'port' => [
                'required_if:type,smpp',
            ],
            'username' => [
                'required_if:type,smpp',
            ],
            'password' => [
                'required_if:type,smpp',
            ],
            'sender' => [
                'required_if:type,smpp',
                'nullable',
            ],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

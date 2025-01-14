<?php

namespace App\Http\Requests;

use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\DelayType;
use App\Enums\EncodingType;
use App\Enums\GatewayParamType;
use App\Enums\MethodType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateGatewayRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
            ],
            'base_url' => [
                'required',
                'url'
            ],
            'success_keyword' => [
                'required',
                'string'
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
                'required',
                Rule::enum(MethodType::class),
            ],
            'json_encoded' => [
                'required',
                'bool',
            ],
            'content_type' => [
                'nullable',
                Rule::enum(ContentType::class),
            ],
            'accept' => [
                'required',
                Rule::enum(ContentType::class),
            ],
            'encoding_type' => [
                'required',
                Rule::enum(EncodingType::class),
            ],
            'ignore_ssl' => [
                'required',
                'bool'
            ],
            'authorization_type' => [
                'required',
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
                'required',
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
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

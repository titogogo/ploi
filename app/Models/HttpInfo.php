<?php

namespace App\Models;

use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\EncodingType;
use App\Enums\MethodType;
use Illuminate\Database\Eloquent\Model;

class HttpInfo extends Model
{
    protected $fillable = [
        'base_url',
        'success_keyword',
        'method_type',
        'json_encoded',
        'content_type',
        'accept',
        'encoding',
        'ignore_ssl',
        'authentication_type',
        'json_message_key',
        'webhook_json_message_key',
        'webhook_json_status_key',
        'gateway_id',
    ];

    protected function casts(): array
    {
        return [
            'method_type' => MethodType::class,
            'json_encoded' => 'boolean',
            'content_type' => ContentType::class,
            'accept' => ContentType::class,
            'encoding' => EncodingType::class,
            'ignore_ssl' => 'boolean',
            'authentication_type' => AuthorizationType::class,
        ];
    }
}

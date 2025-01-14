<?php

namespace App\Models;

use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\DelayType;
use App\Enums\EncodingType;
use App\Enums\GatewayType;
use App\Enums\MethodType;
use Cknow\Money\Casts\MoneyDecimalCast;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Gateway extends Model
{
    protected $appends = [
        'webhook_url'
    ];

    protected $fillable = [
        'name',
        'type',
        'cost',
        'limit',
        'delay',
        'delay_type',
        'enabled',
    ];

    protected function casts(): array
    {
        return [
            'type' => GatewayType::class,
            'enabled' => 'boolean',
            'delay_type' => DelayType::class,
            'cost' => MoneyDecimalCast::class . ':USD,true',
        ];
    }

    public function params(): HasMany
    {
        return $this->hasMany(GatewayParam::class);
    }

    protected function webhookUrl(): Attribute
    {
        return Attribute::make(
            get: fn() => route('api.webhook', $this->id),
        );
    }

    public function info(): HasOne
    {
        return $this->hasOne(
            $this->type === 'http' ? HttpInfo::class : SmppInfo::class
        );
    }
}

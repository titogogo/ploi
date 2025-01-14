<?php

namespace App\Models;

use App\Enums\GatewayParamType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GatewayParam extends Model
{
    protected $fillable = [
        'name',
        'type',
        'value',
        'blank',
        'gateway_id'
    ];

    protected function casts(): array
    {
        return [
            'type' => GatewayParamType::class,
        ];
    }

    public function gateway(): BelongsTo
    {
        return $this->belongsTo(Gateway::class);
    }
}

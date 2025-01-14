<?php

namespace App\Models;

use App\Enums\PaymentMethod;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentLog extends Model
{
    protected $fillable = [
        'provider',
        'provider_id',
        'amount',
        'user_id',
        'payload',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'provider' => PaymentMethod::class,
            'payload' => 'json',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

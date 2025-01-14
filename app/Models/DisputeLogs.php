<?php

namespace App\Models;

use Cknow\Money\Casts\MoneyDecimalCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DisputeLogs extends Model
{
    protected $fillable = [
        'provider',
        'dispute_id',
        'transaction_id',
        'amount',
        'payload',
        'status',
        'user_id',
        'created_at'
    ];

    protected function casts(): array
    {
        return [
            'amount' => MoneyDecimalCast::class.':currency,true',
            'payload' => 'json',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

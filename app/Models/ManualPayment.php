<?php

namespace App\Models;

use App\Enums\ManualPaymentStatus;
use App\Enums\PaymentMethod;
use Cknow\Money\Casts\MoneyDecimalCast;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ManualPayment extends Model
{
    protected $fillable = [
        'method',
        'email',
        'transaction_id',
        'amount',
        'files',
        'user_id',
        'status',
    ];

    protected $appends = [
        'formatted_created_at'
    ];

    protected function casts(): array
    {
        return [
            'method' => PaymentMethod::class,
            'files' => 'array',
            'amount' => MoneyDecimalCast::class.':USD,true',
            'status' => ManualPaymentStatus::class,
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function formattedCreatedAt(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at->format('d M Y \a\t, H:i A'),
        );
    }
}

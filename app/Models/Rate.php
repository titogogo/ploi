<?php

namespace App\Models;

use Cknow\Money\Casts\MoneyDecimalCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rate extends Model
{
    protected $fillable = [
        'country_code',
        'country_name',
        'operator_prefix',
        'type',
        'rate',
        'created_by'
    ];

    protected function casts(): array
    {
        return [
            'rate' => MoneyDecimalCast::class.':USD,true',
        ];
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

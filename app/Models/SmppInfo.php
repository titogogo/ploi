<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SmppInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'ip_address',
        'port',
        'username',
        'password',
        'gateway_id',
    ];

    public function gateway(): BelongsTo
    {
        return $this->belongsTo(Gateway::class);
    }
}

<?php

namespace App\Models;

use App\Enums\MessageType;
use App\Jobs\SendMessageJob;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ScheduledMessage extends Model
{
    protected $fillable = [
        'text',
        'sender_id',
        'status',
        'type',
        'schedule_datetime',
        'retries',
        'error',
        'user_id',
        'gateway_id',
    ];

    protected $casts = [
        'type' => MessageType::class,
        'schedule_datetime' => 'datetime',
    ];

    public function recipients(): HasMany
    {
        return $this->hasMany(ScheduledMessageRecipient::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function gateway(): BelongsTo
    {
        return $this->belongsTo(Gateway::class);
    }

    public function responses(): HasMany
    {
        return $this->hasMany(MessageResponse::class);
    }
}

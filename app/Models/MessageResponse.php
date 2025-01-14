<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MessageResponse extends Model
{
    protected $fillable = [
        'status',
        'response',
        'provider_message_id',
        'scheduled_message_id',
        'scheduled_message_recipient_id',
        'gateway_id',
        'webhook_payload',
    ];

    protected function casts(): array
    {
        return [
            'webhook_payload' => 'json',
        ];
    }

    protected function scheduledMessage(): BelongsTo
    {
        return $this->belongsTo(ScheduledMessage::class);
    }

    public function recipient(): BelongsTo
    {
        return $this->belongsTo(ScheduledMessageRecipient::class, 'scheduled_message_recipient_id');
    }

    public function gateway(): BelongsTo
    {
        return $this->belongsTo(Gateway::class);
    }
}

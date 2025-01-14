<?php

namespace App\DataTransferObjects;

use App\Models\ScheduledMessageRecipient;

class GatewayResponse
{
    public function __construct(
        public bool $success,
        public ?ScheduledMessageRecipient $recipient,
        public ?string $error,
        public string|array|int|null $result,
    )
    {
    }
}

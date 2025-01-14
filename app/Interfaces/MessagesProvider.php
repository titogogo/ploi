<?php

namespace App\Interfaces;

use App\Models\ScheduledMessage;

interface MessagesProvider
{
    public function send(ScheduledMessage $message);
}

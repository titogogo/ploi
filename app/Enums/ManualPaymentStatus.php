<?php

namespace App\Enums;

enum ManualPaymentStatus: string
{
    case PENDING = 'pending';
    case COMPLETED = 'completed';
}

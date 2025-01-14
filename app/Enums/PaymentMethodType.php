<?php

namespace App\Enums;

enum PaymentMethodType: string
{
    case AUTO = 'auto';
    case MANUAL = 'manual';
}

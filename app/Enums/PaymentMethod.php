<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum PaymentMethod: string
{
    use Arrayable;

    case PAYPAL = 'Paypal';
    case SKRILL = 'Skrill';
    case REVULOT = 'Revolut';
    case BINANCE = 'Binance';
}

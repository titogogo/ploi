<?php

namespace App\Settings;

use App\Enums\PaymentMethodType;
use Spatie\LaravelSettings\Settings;

class PaymentSettings extends Settings
{
    public bool $paypal;
    public PaymentMethodType $paypal_type;
    public bool $skrill;
    public PaymentMethodType $skrill_type;
    public bool $revolut;
    public PaymentMethodType $revolut_type;
    public bool $binance;
    public PaymentMethodType $binance_type;

    public static function group(): string
    {
        return 'payment';
    }
}

<?php

use App\Enums\PaymentMethodType;
use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration {
    public function up(): void
    {
        $this->migrator->add('payment.paypal', true);
        $this->migrator->add('payment.paypal_type', PaymentMethodType::AUTO);
        $this->migrator->add('payment.skrill', true);
        $this->migrator->add('payment.skrill_type', PaymentMethodType::MANUAL);
        $this->migrator->add('payment.revolut', true);
        $this->migrator->add('payment.revolut_type', PaymentMethodType::MANUAL);
        $this->migrator->add('payment.binance', true);
        $this->migrator->add('payment.binance_type', PaymentMethodType::AUTO);
    }
};

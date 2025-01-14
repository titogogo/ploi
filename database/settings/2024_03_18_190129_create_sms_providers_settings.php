<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('smsProviders.sms_send_co_key', '');
        $this->migrator->add('smsProviders.web_post_service_username', '');
        $this->migrator->add('smsProviders.web_post_service_password', '');
    }
};

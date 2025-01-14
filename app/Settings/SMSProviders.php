<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class SMSProviders extends Settings
{
    public string $sms_send_co_key;
    public string $web_post_service_username;
    public string $web_post_service_password;

    public static function group(): string
    {
        return 'smsProviders';
    }
}

<?php

test('it can query balance', function () {
    $setting = new \App\Settings\SMSProviders([
        'sms_send_co_key' => 'WLRKE-DDTPQ-AR65F-88CB8-A8001'
    ]);
    $sendSms = new \App\Services\SMSSendCo($setting);
    $msg = \App\Models\ScheduledMessage::create([
        'text' => 'test',
        'sender_id' => 'test',
        'gateway' => \App\Enums\MessageGateway::SMSSENDCO,
        'status' => 'pending',
        'type' => \App\Enums\MessageType::TEXT,
        'schedule_datetime' => now(),
        'retries' => 1,
    ]);

    $msg->recipients()->create([
        'phone' => '+201140200011'
    ]);

    dd($sendSms->send($msg));

})->only();

<?php

it('will send a message', function () {
    $setting = new \App\Settings\SMSProviders([
        'web_post_service_username' => 'test',
        'web_post_service_password' => 'test'
    ]);

    $service = new \App\Services\WebPostService($setting);

    $msg = \App\Models\ScheduledMessage::create([
        'text' => 'test',
        'sender_id' => 'test',
        'gateway' => \App\Enums\MessageGateway::WEBPOSTSERVICE,
        'status' => 'pending',
        'type' => \App\Enums\MessageType::TEXT,
        'schedule_datetime' => now(),
        'retries' => 1,
    ]);

    $responses = $msg->recipients()->create([
        'phone' => '+201140200011'
    ]);

    expect($responses)
        ->toBeArray()
        ->toHaveCount(1);
});

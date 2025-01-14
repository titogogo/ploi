<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('message_responses', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->string('response')->nullable();
            $table->string('provider_message_id')->nullable();
            $table->foreignId('scheduled_message_id');
            $table->foreignId('scheduled_message_recipient_id');
            $table->foreignId('gateway_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('message_responses');
    }
};

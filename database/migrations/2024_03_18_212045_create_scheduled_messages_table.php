<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('scheduled_messages', function (Blueprint $table) {
            $table->id();
            $table->text('text')->nullable();
            $table->string('sender_id')->nullable();
            $table->string('status');
            $table->string('type');
            $table->dateTime('schedule_datetime')->nullable();
            $table->integer('retries');
            $table->string('error')->nullable();
            $table->foreignId('user_id');
            $table->foreignId('gateway_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scheduled_messages');
    }
};

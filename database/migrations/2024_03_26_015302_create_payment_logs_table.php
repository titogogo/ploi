<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('payment_logs', function (Blueprint $table) {
            $table->id();
            $table->string('provider');
            $table->string('provider_id')->nullable();
            $table->string('amount');
            $table->foreignId('user_id');
            $table->json('payload')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_logs');
    }
};

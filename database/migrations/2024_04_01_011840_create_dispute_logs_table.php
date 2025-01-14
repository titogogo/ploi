<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('dispute_logs', function (Blueprint $table) {
            $table->id();
            $table->string('provider');
            $table->string('dispute_id');
            $table->string('transaction_id');
            $table->string('amount');
            $table->string('currency');
            $table->json('payload');
            $table->string('status');
            $table->foreignId('user_id')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dispute_logs');
    }
};

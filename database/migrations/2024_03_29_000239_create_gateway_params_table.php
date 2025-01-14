<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('gateway_params', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('value')->nullable();
            $table->foreignId('gateway_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gateway_params');
    }
};

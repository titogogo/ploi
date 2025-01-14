<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('smpp_infos', function (Blueprint $table) {
            $table->id();
            $table->string('ip_address');
            $table->unsignedSmallInteger('port');
            $table->string('username');
            $table->string('password');
            $table->foreignId('gateway_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('smpp_infos');
    }
};

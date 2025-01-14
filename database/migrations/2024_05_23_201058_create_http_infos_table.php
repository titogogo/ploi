<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('http_infos', function (Blueprint $table) {
            $table->id();
            $table->string('base_url');
            $table->string('success_keyword');
            $table->string('method_type');
            $table->boolean('json_encoded');
            $table->string('content_type')->nullable();
            $table->string('accept')->nullable();
            $table->string('encoding')->nullable();
            $table->string('ignore_ssl');
            $table->string('authentication_type');
            $table->string('json_message_key')->nullable()->after('success_keyword');
            $table->string('webhook_json_message_key')->nullable()->after('json_message_key');
            $table->string('webhook_json_status_key')->nullable()->after('webhook_json_message_key');
            $table->foreignId('gateway_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('http_infos');
    }
};

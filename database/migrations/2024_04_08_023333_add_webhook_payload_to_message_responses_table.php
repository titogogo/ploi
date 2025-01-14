<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('message_responses', function (Blueprint $table) {
            $table->json('webhook_payload')->nullable()->after('gateway_id');
        });
    }

    public function down(): void
    {
        Schema::table('message_responses', function (Blueprint $table) {
            $table->dropColumn('webhook_payload');
        });
    }
};

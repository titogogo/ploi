<?php

use App\Http\Controllers\Api\BalanceController;
use App\Http\Controllers\Api\GatewayWebhookController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\SendMessageController;
use App\Http\Controllers\BinanceController;
use App\Http\Controllers\PaypalController;
use App\Http\Middleware\UserApiEnabledMiddleware;
use App\Http\Middleware\UserEnabledMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', LoginController::class)->name('api.login');
Route::post('ipn/paypal', [PaypalController::class, 'store'])->name('ipn.paypal');
Route::post('ipn/binance', [BinanceController::class, 'store'])->name('ipn.binance');

Route::post('webhook/{gateway}', GatewayWebhookController::class)->name('api.webhook');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    UserApiEnabledMiddleware::class,
    UserEnabledMiddleware::class,
])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('balance', BalanceController::class);

    Route::post('send', SendMessageController::class)->name('send-message');
});

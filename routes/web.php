<?php

use App\Http\Controllers\AddressBookController;
use App\Http\Controllers\ApproveManualPaymentController;
use App\Http\Controllers\ChangeGatewayStatusController;
use App\Http\Controllers\ChangeUserPasswordController;
use App\Http\Controllers\CoverageController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeductBalanceController;
use App\Http\Controllers\DisputeLogsController;
use App\Http\Controllers\FundController;
use App\Http\Controllers\GatewayController;
use App\Http\Controllers\ManualPaymentController;
use App\Http\Controllers\MessageResponseController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RetryMessageController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\StopScheduledMessageController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\TransferFundsController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\UserEnabledMiddleware;
use App\Services\SmsBuilder;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use LaravelSmpp\SmppService;
use LaravelSmpp\SmppServiceInterface;

Route::get('/', function () {
    return redirect(route('dashboard'));
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    UserEnabledMiddleware::class,
])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::resource('users', UserController::class);
    Route::post('users/{user}/deduct', DeductBalanceController::class)->name('users.deduct');
    Route::post('users/{user}/set-password', ChangeUserPasswordController::class)->name('users.set-password');
    Route::resource('messages', MessagesController::class);
    Route::resource('templates', TemplateController::class);
    Route::get('messages/{message}/responses', [MessageResponseController::class, 'show'])->name('messages.responses');
    Route::post('messages/{message}/retry', RetryMessageController::class)->name('messages.retry');
    Route::post('messages/{message}/stop', StopScheduledMessageController::class)->name('messages.stop');
    Route::resource('address-books', AddressBookController::class);
    Route::resource('fund', FundController::class);
    Route::resource('transfer-funds', TransferFundsController::class);
    Route::resource('coverage', CoverageController::class);
    Route::resource('settings', SettingController::class);
    Route::resource('gateway', GatewayController::class);
    Route::post('gateway/{gateway}/change-status', ChangeGatewayStatusController::class)
        ->name('change-gateway-status');
    Route::resource('dispute-logs', DisputeLogsController::class);

    Route::group(['prefix' => 'manual-payments', 'as' => 'manual-payments.'], function () {
        Route::get('/', [ManualPaymentController::class, 'index'])->name('index');
        Route::get('/{payment}', [ManualPaymentController::class, 'show'])->name('show');
        Route::post('/{payment}/approve', ApproveManualPaymentController::class)->name('approve');
        Route::get('create/{method}', [ManualPaymentController::class, 'create'])->name('create');
        Route::post('{method}', [ManualPaymentController::class, 'store'])->name('store');
    });

    Route::get('users/{user}/transactions', [FundController::class, 'index'])->name('user.transactions');
    Route::post('users/{user}/status', [UserController::class, 'setStatus'])->name('user.set-status');
    Route::get('payments', [PaymentController::class, 'index'])->name('payment.index');
    Route::post('payments/destroy-many', [PaymentController::class, 'destroyMany'])->name('payments.destroy-many');
    Route::get('payment/success', [PaymentController::class, 'success'])->name('payment.success');
    Route::get('test', function () {
        (new SmsBuilder('195.191.165.22', '31012', 'Reals1s', 'jGH8b867', 10000))
            ->setRecipient('201140200011', \smpp\SMPP::TON_INTERNATIONAL) //msisdn of recipient
            ->sendMessage('tests sms');
    });

    Route::impersonate();
});

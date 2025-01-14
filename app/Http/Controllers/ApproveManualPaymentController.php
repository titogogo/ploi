<?php

namespace App\Http\Controllers;

use App\Enums\ManualPaymentStatus;
use App\Enums\PaymentMethod;
use App\Enums\TransactionDirection;
use App\Enums\TransactionType;
use App\Http\Requests\ApproveManualPaymentRequest;
use App\Models\ManualPayment;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ApproveManualPaymentController extends Controller
{
    public function __invoke(
        ApproveManualPaymentRequest $request,
        ManualPayment $payment,
    )
    {
        abort_unless(auth()->user()->admin, 403);

        $payment->load('user');

        if ($payment->status === ManualPaymentStatus::COMPLETED) {
            throw ValidationException::withMessages([
                'amount' => ['This payment is already completed.'],
            ]);
        }

        DB::transaction(function () use ($payment, $request) {
            $amount = money($request->float('amount'));

            $newBalance = $payment->user->balance->add($amount);

            $payment->user->update([
                'balance' => $newBalance,
            ]);

            Transaction::create([
                'type' => TransactionType::EXTERNAL,
                'direction' => TransactionDirection::IN,
                'amount' => $amount,
                'payment_method' => $payment->method,
                'payment_order_id' => $payment->id,
                'user_id' => $payment->user->id,
            ]);

            $payment->update([
                'status' => ManualPaymentStatus::COMPLETED,
            ]);
        });

        return back();
    }
}

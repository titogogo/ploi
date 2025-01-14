<?php

namespace App\Http\Controllers;

use App\Enums\PaymentMethod;
use App\Enums\TransactionDirection;
use App\Enums\TransactionType;
use App\Models\DisputeLogs;
use App\Models\PaymentLog;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaypalController extends Controller
{
    public function store(Request $request)
    {
        $eventType = $request->input('event_type');

        if ($eventType == 'CHECKOUT.ORDER.APPROVED') {
            $resource = collect($request->input('resource'));

            if ($resource->get('status') == 'APPROVED') {
                $paymentLog = PaymentLog::with('user')
                    ->where('provider_id', $resource->get('id'))
                    ->first();

                if ($paymentLog && $paymentLog->status == 'pending') {
                    $paymentLog->update([
                        'status' => $resource->get('status'),
                        'payload' => $request->toArray(),
                    ]);


                    $provider = new PayPalClient;

                    $token = $provider->getAccessToken();

                    $provider->setAccessToken($token);

                    $order = $provider->showOrderDetails($resource->get('id'));

                    if ($order['status'] == 'APPROVED') {
                        $amount = money($paymentLog->amount * 100);

                        $balance = $paymentLog->user->balance->add($amount);

                        $paymentLog->user->update([
                            'balance' => $balance
                        ]);

                        Transaction::create([
                            'type' => TransactionType::EXTERNAL,
                            'direction' => TransactionDirection::IN,
                            'amount' => $amount,
                            'payment_method' => PaymentMethod::PAYPAL,
                            'payment_order_id' => $resource->get('id'),
                            'user_id' => $paymentLog->user->id,
                        ]);
                    }
                }
            }
        }

        if (in_array($eventType, ['CUSTOMER.DISPUTE.CREATED', 'CUSTOMER.DISPUTE.RESOLVED', 'CUSTOMER.DISPUTE.UPDATED'])) {
            $resource = collect($request->input('resource'));
            $transactionId = $resource->get('disputed_transactions')[0]['seller_transaction_id'];

            $paymentLog = PaymentLog::where('provider_id', $transactionId)->first();

            $amount = money($resource->get('dispute_amount')['value'], $resource->get('dispute_amount')['currency_code']);

            DisputeLogs::updateOrCreate(
                [
                    'dispute_id' => $resource->get('dispute_id'),
                ],
                [
                    'provider' => PaymentMethod::PAYPAL,
                    'create_at' => $resource->get('create_time'),
                    'transaction_id' => $transactionId,
                    'amount' => $amount,
                    'payload' => $resource->all(),
                    'status' => $resource->get('status'),
                    'user_id' => $paymentLog ? $paymentLog->user_id : 0,
                ]
            );
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Enums\PaymentMethod;
use App\Enums\TransactionDirection;
use App\Enums\TransactionType;
use App\Models\PaymentLog;
use App\Models\Transaction;
use CryptoPay\Binancepay\BinancePay;
use Illuminate\Http\Request;

class BinanceController
{
    public function store(Request $request)
    {
        $webhookResponse = $request->all();
        $publicKey = (new BinancePay("binancepay/openapi/certificates"))
            ->query($webhookResponse);

        $payload = $request->header('Binancepay-Timestamp') . "\n" .
            $request->header('Binancepay-Nonce') . "\n" .
            json_encode($webhookResponse, JSON_THROW_ON_ERROR) . "\n";

        $decodedSignature = base64_decode($request->header('Binancepay-Signature'));

        if (openssl_verify($payload, $decodedSignature, $publicKey['data'][0]['certPublic'], OPENSSL_ALGO_SHA256)) {
            abort(500);
        }

        if ($publicKey['status'] === "SUCCESS") {
            $merchantTradeNo = json_decode($webhookResponse['data'], true, 512, JSON_THROW_ON_ERROR)['merchantTradeNo'];

            $paymentLog = PaymentLog::findOrFail($merchantTradeNo);

            if ($paymentLog->status == 'pending') {
                switch ($webhookResponse['bizStatus']) {
                    case "PAY_SUCCESS":
                        $paymentLog->update([
                            'status' => 'PAY_SUCCESS',
                            'payload' => $payload,
                        ]);

                        $amount = money($paymentLog->amount * 100);

                        $balance = $paymentLog->user->balance->add($amount);

                        $paymentLog->user->update([
                            'balance' => $balance
                        ]);

                        Transaction::create([
                            'type' => TransactionType::EXTERNAL,
                            'direction' => TransactionDirection::IN,
                            'amount' => $amount,
                            'payment_method' => PaymentMethod::BINANCE,
                            'payment_order_id' => $request->input('bizId'),
                            'user_id' => $paymentLog->user->id,
                        ]);

                        break;
                    case "PAY_CLOSED":

                        $paymentLog->update([
                            'status' => 'CLOSED',
                            'payload' => $request->toArray(),
                        ]);

                        break;
                }
            }
        }

        return response()->json(['returnCode' => 'SUCCESS', 'returnMessage' => null], 200);
    }
}

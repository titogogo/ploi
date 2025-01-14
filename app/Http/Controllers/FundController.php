<?php

namespace App\Http\Controllers;

use App\Enums\PaymentMethod;
use App\Http\Requests\FundRequest;
use App\Models\PaymentLog;
use App\Models\Transaction;
use App\Models\User;
use App\Settings\PaymentSettings;
use CryptoPay\Binancepay\BinancePay;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class FundController extends Controller
{
    public function index(User $user = null)
    {
        if ($user && !auth()->user()->admin) {
            $user = auth()->user();
        }

        $transactions = Transaction::with('fromUser')
            ->where('user_id', $user?->id ?? auth()->id())
            ->latest()
            ->get();

        return Inertia::render('Fund/History', compact('transactions'));
    }

    public function create(PaymentSettings $settings)
    {
        $paymentMethods = [];

        foreach (array_column(PaymentMethod::cases(), 'value') as $method) {
            if ($settings->{Str::lower($method)}) {
                $paymentMethods[] = $method;
            }
        }

        return Inertia::render('Fund/Buy', compact('paymentMethods'));
    }

    public function store(
        FundRequest     $request,
        PaymentSettings $settings,
    )
    {
        $paymentMethod = $request->enum('payment_method', PaymentMethod::class);

        if (!$settings->{Str::lower($paymentMethod->value)}) {
            throw ValidationException::withMessages([
                'payment_method' => ['Invalid payment method'],
            ]);
        }


        if ($request->integer('amount') < config('sendroid.min_fund_amount')) {
            throw ValidationException::withMessages([
                'amount' => ["Minimum fund amount is $" . config('sendroid.min_fund_amount') . '.'],
            ]);
        }

        if ($paymentMethod == PaymentMethod::PAYPAL) {
            return Inertia::location($this->createPaypalOrder($request));
        }

        if ($paymentMethod == PaymentMethod::BINANCE) {
            return Inertia::location($this->createBinanceOrder($request));
        }

        if (in_array($paymentMethod, [PaymentMethod::REVULOT, PaymentMethod::SKRILL])) {
            return redirect(route('manual-payments.create', $paymentMethod));
        }
    }

    public function createPaypalOrder(FundRequest $request)
    {
        $provider = new PayPalClient;

        $token = $provider->getAccessToken();

        $provider->setAccessToken($token);

        $order = $provider->createOrder([
            "intent" => "CAPTURE",
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => config('app.currency'),
                        "value" => $request->integer('amount')
                    ]
                ]
            ],
            "payment_source" => [
                "paypal" => [
                    "experience_context" => [
                        "payment_method_preference" => "IMMEDIATE_PAYMENT_REQUIRED",
                        "brand_name" => config('app.name'),
                        "locale" => "en-US",
                        "user_action" => "PAY_NOW",
                        "return_url" => route('payment.success'),
                        "cancel_url" => route('fund.index'),
                    ]
                ]
            ]
        ]);

        PaymentLog::create([
            'provider' => $request->input('payment_method'),
            'provider_id' => $order['id'],
            'amount' => $request->integer('amount'),
            'user_id' => auth()->id(),
            'status' => 'pending',
        ]);

        $links = collect($order['links']);

        return $links[1]['href'];
    }

    public function createBinanceOrder(FundRequest $request)
    {
        $paymentLog = PaymentLog::create([
            'provider' => 'Binance',
            'amount' => $request->string('amount')->toString(),
            'user_id' => auth()->id(),
            'status' => 'pending',
        ]);

        $data['order_amount'] = $request->integer('amount');
        $data['package_id'] = $paymentLog->id;
        $data['goods_name'] = config('app.name') . ' credits';
        $data['goods_detail'] = null;
        $data['buyer'] = [
            "referenceBuyerId" => auth()->id(),
            "buyerEmail" => auth()->user()->email,
            "buyerName" => null,
        ];


        $data['trx_id'] = $paymentLog->id;
        $data['merchant_trade_no'] = $paymentLog->id;

        $binancePay = new BinancePay("binancepay/openapi/v2/order");
        $res = $binancePay->createOrder($data);

        $paymentLog->update([
            'provider_id' => $res['data']['prepayId']
        ]);

        return $res['data']['checkoutUrl'];
    }
}

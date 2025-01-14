<?php

namespace App\Http\Controllers;

use App\Settings\PaymentSettings;
use App\Settings\SMSProviders;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController
{
    public function index(PaymentSettings $settings)
    {
        abort_unless(auth()->user()->admin, true);

        return Inertia::render('Settings/Index', compact('settings'));
    }

    public function store(
        Request $request,
        PaymentSettings $settings,
    )
    {
        abort_unless(auth()->user()->admin, true);

        if ($request->exists('paypal')) {
            $settings->paypal = $request->boolean('paypal');
        }

        if ($request->exists('skrill')) {
            $settings->skrill = $request->boolean('skrill');
        }

        if ($request->exists('revolut')) {
            $settings->revolut = $request->boolean('revolut');
        }

        if ($request->exists('binance')) {
            $settings->binance = $request->boolean('binance');
        }

        $settings->save();

        return redirect(route('settings.index'));
    }
}

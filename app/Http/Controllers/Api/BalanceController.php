<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class BalanceController extends Controller
{
    public function __invoke()
    {
        return response()->json([
            'success' => true,
            'balance' => intval(auth()->user()->balance->getAmount()),
        ]);
    }
}

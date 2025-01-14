<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangeGatewayStatusRequest;
use App\Models\Gateway;

class ChangeGatewayStatusController extends Controller
{
    public function __invoke(
        Gateway $gateway,
        ChangeGatewayStatusRequest $request,
    )
    {
        $gateway->update([
            'enabled' => $request->boolean('enabled'),
        ]);

        return redirect()->back();
    }
}

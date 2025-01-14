<?php

namespace App\Http\Controllers;

use App\Enums\TransactionDirection;
use App\Enums\TransactionType;
use App\Http\Requests\DeductBalanceRequest;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DeductBalanceController extends Controller
{
    public function __invoke(
        User $user,
        DeductBalanceRequest $request,
    )
    {

        $newBalance = $user->balance->subtract(money($request->float('amount')));

        if ($newBalance->getAmount() < 0) {
            throw ValidationException::withMessages([
                'amount' => ['User doesn\'t have that balance.'],
            ]);
        }

        $updated = $user->update([
            'balance' => $newBalance,
        ]);

        if ($updated) {
            Transaction::create([
                'type' => TransactionType::INTERNAL,
                'amount' => $request->float('amount'),
                'direction' => TransactionDirection::OUT,
                'from_user_id' => auth()->user()->id,
                'user_id' => $user->id,
            ]);
        }

        return back();
    }
}

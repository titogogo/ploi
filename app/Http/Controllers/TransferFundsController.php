<?php

namespace App\Http\Controllers;

use App\Enums\TransactionDirection;
use App\Enums\TransactionType;
use App\Http\Requests\TransferFundsRequest;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TransferFundsController extends Controller
{
    public function index()
    {
        return Inertia::render('Fund/Transfer');
    }

    public function store(TransferFundsRequest $request)
    {
        if (!Hash::check($request->string('password')->toString(), auth()->user()->password)) {
            throw ValidationException::withMessages([
                'password' => ['The provided password are incorrect.'],
            ]);
        }

        if ($request->integer('amount') < config('sendroid.min_transfer_amount')) {
            throw ValidationException::withMessages([
                'amount' => ['Minimum transfer amount is $' . config('sendroid.min_transfer_amount') . '.'],
            ]);
        }

        if (auth()->user()->email == $request->input('email')) {
            throw ValidationException::withMessages([
                'email' => ["You can't transfer to yourself."],
            ]);
        }

        $currentUser = User::findOrFail(auth()->id());

        $transferAmount = money($request->integer('amount') * 100);

        if ($currentUser->balance->lessThan($transferAmount)) {
            throw ValidationException::withMessages([
                'amount' => ["You don't have that amount of credits."],
            ]);
        }

        DB::transaction(function () use ($request, $currentUser, $transferAmount) {
            $newUserBalance = $currentUser->balance->subtract($transferAmount);

            $updated = $currentUser->update([
                'balance' => $newUserBalance,
            ]);

            if ($updated) {
                $recipient = User::where('email', $request->string('email')->toString())
                    ->first();

                Transaction::create([
                    'type' => TransactionType::INTERNAL,
                    'amount' => $transferAmount,
                    'direction' => TransactionDirection::OUT,
                    'from_user_id' => $recipient->id,
                    'user_id' => $currentUser->id,
                ]);

                $newBalance = $recipient->balance->add($transferAmount);

                $addUpdate = $recipient->update([
                    'balance' => $newBalance,
                ]);

                if ($addUpdate) {
                    Transaction::create([
                        'type' => TransactionType::INTERNAL,
                        'direction' => TransactionDirection::IN,
                        'amount' => $transferAmount,
                        'from_user_id' => $currentUser->id,
                        'user_id' => $recipient->id,
                    ]);
                }
            }
        });

        return redirect(route('transfer-funds.index'));
    }
}

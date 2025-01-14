<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangeUserPasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ChangeUserPasswordController extends Controller
{
    public function __invoke(
        User $user,
        ChangeUserPasswordRequest $request,
    )
    {
        $user->forceFill([
            'password' => Hash::make($request->string('password')->toString()),
        ])->save();

        return back();
    }
}

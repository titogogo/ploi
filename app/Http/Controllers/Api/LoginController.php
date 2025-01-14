<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginRequest;
use App\Http\Responses\TokenResponse;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController
{
    public function __invoke(LoginRequest $request)
    {
        $user = User::query()
            ->where(
                'email',
                $request->string('email')->toString(),
            )->firstOrFail();

        if (! $user || ! Hash::check($request->string('password')->toString(), $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return new TokenResponse(
            token: $user->createToken('API'),
        );
    }
}

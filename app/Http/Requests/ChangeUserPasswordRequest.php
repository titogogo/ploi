<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class ChangeUserPasswordRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'password' => [
                'required',
                'confirmed',
                Password::default(),
            ]
        ];
    }

    public function authorize(): bool
    {
        return auth()->user() && auth()->user()->admin;
    }
}

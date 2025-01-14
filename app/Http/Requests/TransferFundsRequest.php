<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransferFundsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                'numeric',
            ],
            'email' => [
                'required',
                'email',
                'exists:users'
            ],
            'password' => [
                'required',
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

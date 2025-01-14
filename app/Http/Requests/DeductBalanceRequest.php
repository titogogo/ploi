<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeductBalanceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                'numeric',
                'min:1'
            ]
        ];
    }

    public function authorize(): bool
    {
        return auth()->user() && auth()->user()->admin;
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApproveManualPaymentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
            ]
        ];
    }

    public function authorize(): bool
    {
        return auth()->user()->admin;
    }
}

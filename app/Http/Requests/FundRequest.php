<?php

namespace App\Http\Requests;

use App\Enums\PaymentMethod;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FundRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                'numeric',
            ],
            'payment_method' => [
                'required',
                Rule::enum(PaymentMethod::class),
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

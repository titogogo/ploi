<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class CreateManualPaymentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                new \Cknow\Money\Rules\Money('USD')
            ],
            'email' => [
                'required',
                'email',
            ],
            'transaction_id' => [
                'required',
            ],
            'files' => [
                'required',
                'array',
            ],
            'files.*' => [
                File::types(['jpg', 'jpeg', 'png'])
                    ->max('30mb'),
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

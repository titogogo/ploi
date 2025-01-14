<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangeGatewayStatusRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'enabled' => [
                'required',
                'bool',
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

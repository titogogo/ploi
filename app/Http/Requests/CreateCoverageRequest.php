<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCoverageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'country' => [
                'required',
            ],
            'operator_prefix' => [
                'nullable',
            ],
            'type' => [
                'required',
                'in:text,unicode',
            ],
            'rate' => [
                'required',
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

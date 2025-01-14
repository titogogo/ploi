<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTemplateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'unique:templates,name'
            ],
            'content' => [
                'required',
                'string',
            ]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

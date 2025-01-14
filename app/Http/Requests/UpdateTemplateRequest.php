<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTemplateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'unique:templates,name' . $this->template->id
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

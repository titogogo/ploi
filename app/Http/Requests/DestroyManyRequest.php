<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DestroyManyRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'ids' => [
                'required',
            ]
        ];
    }

    public function authorize(): bool
    {
        return auth()->user() && auth()->user()->admin;
    }
}

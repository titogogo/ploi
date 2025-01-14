<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class CreateAddressBookRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                Rule::unique('address_books')->where(function ($query) {
                    return $query
                        ->where('name', $this->input('name'))
                        ->where('user_id', auth()->id());
                }),
            ],
            'notes' => 'nullable|string',
            'files' => [
                'required',
                'array',
            ],
            'files.*' => [
                File::types(['txt'])
                    ->max('30mb'),
            ]
        ];
    }
}

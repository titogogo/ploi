<?php

namespace App\Http\Requests;

use App\Enums\MessageGateway;
use App\Enums\MessageRecipientsType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class SendMessageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'gateway_id' => [
                'required',
                Rule::exists('gateways', 'id')
                    ->where('enabled', true),
            ],
            'sender_id' => 'required',
            'recipients_type' => [
                'nullable',
                Rule::enum(MessageRecipientsType::class),
            ],
            'recipients_file' => [
                'required_if::recipients_type,file',
            ],
            'recipients' => [
                'nullable',
                'required_if::recipients_type,numbers',
                'array',
                'min:1'
            ],
            'recipients.*' => [
                'phone:mobile'
            ],
            'address_book' => [
                'nullable',
                'required_if::recipients_type,address_book',
                'exists:address_books,id'
            ],
            'message' => [
                'required',
            ],
            'schedule' => [
                'bool',
                'nullable'
            ],
            'schedule_date' => [
                'required_if_accepted:schedule'
            ],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        if ($this->input('recipients') !== null) {
            $recipients = [];

            foreach ($this->input('recipients') as $recipient) {
                if (!Str::startsWith($recipient, '+')) {
                    $recipients[] = '+' . $recipient;
                    continue;
                }
                $recipients[] = $recipient;
            }

            $this->merge([
                'recipients' => $recipients
            ]);
        }
    }
}

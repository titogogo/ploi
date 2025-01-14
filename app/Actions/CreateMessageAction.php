<?php

namespace App\Actions;

use App\Enums\MessageRecipientsType;
use App\Enums\MessageType;
use App\Enums\ScheduledMessageStatus;
use App\Http\Requests\SendMessageRequest;
use App\Jobs\SendMessageJob;
use App\Models\AddressBook;
use App\Models\Contact;
use App\Models\ScheduledMessage;
use App\Models\ScheduledMessageRecipient;
use App\Models\Template;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class CreateMessageAction
{
    public static function execute(SendMessageRequest $request): ?ScheduledMessage
    {
        return DB::transaction(function () use($request) {
            $message = ScheduledMessage::create([
                'text' => $request->input('message'),
                'sender_id' => $request->input('sender_id'),
                'gateway_id' => $request->integer('gateway_id'),
                'status' => ScheduledMessageStatus::PENDING,
                'schedule_datetime' => $request->input('schedule_date'),
                'type' => MessageType::TEXT, // TEXT, UNICODE $request->input('type')
                'retries' => 1,
                'user_id' => auth()->id(),
            ]);

            $recipientsType = $request->enum('recipients_type', MessageRecipientsType::class);

            if ($recipientsType === MessageRecipientsType::NUMBERS) {
                collect($request->input('recipients'))->each(function ($recipient) use ($message) {
                    $message->recipients()->save(
                        new ScheduledMessageRecipient([
                            'phone' => $recipient,
                        ])
                    );
                });
            }

            if ($recipientsType === MessageRecipientsType::ADDRESS_BOOK) {
                $addressBook = AddressBook::with('contacts')->findOrFail($request->integer('address_book'));

                /**
                 * @var $contact Contact
                 */
                $addressBook->contacts->each(function ($contact) use ($message) {
                    $message->recipients()->save(
                        new ScheduledMessageRecipient([
                            'phone' => $contact->phone,
                        ])
                    );
                });
            }


            if ($recipientsType === MessageRecipientsType::FILE) {
                /**
                 * @var $file UploadedFile
                 */
                foreach ($request->allFiles()['recipients_files'] as $file) {
                    $fileName = auth()->id() . '-' . Str::random() . '.txt';
                    $filePath = $file->storeAs('contacts_files', $fileName);

                    File::lines(storage_path('app/' . $filePath))->each(function ($line) use ($message) {
                        if ($line !== null || trim($line) !== '') {
                            $message->recipients()->save(
                                new ScheduledMessageRecipient([
                                    'phone' => $line,
                                ])
                            );
                        }
                    });
                }
            }

            SendMessageJob::dispatch($message);

            return $message;
        });
    }
}

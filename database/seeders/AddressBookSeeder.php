<?php

namespace Database\Seeders;

use App\Models\AddressBook;
use App\Models\Contact;
use Illuminate\Database\Seeder;

class AddressBookSeeder extends Seeder
{
    public function run(): void
    {
        AddressBook::factory(50)->create()->each(function ($addressBook) {
            Contact::factory(30)->create([
                'address_book_id' => $addressBook->id,
            ]);
        });
    }
}

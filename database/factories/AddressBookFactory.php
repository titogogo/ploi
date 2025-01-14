<?php

namespace Database\Factories;

use App\Models\AddressBook;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class AddressBookFactory extends Factory
{
    protected $model = AddressBook::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'user_id' => 1,
        ];
    }
}

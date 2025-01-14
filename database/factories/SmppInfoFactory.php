<?php

namespace Database\Factories;

use App\Models\Gateway;
use App\Models\SmppInfo;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class SmppInfoFactory extends Factory
{
    protected $model = SmppInfo::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'ip' => $this->faker->ipv4(),
            'port' => $this->faker->randomNumber(),
            'username' => $this->faker->userName(),
            'password' => bcrypt($this->faker->password()),

            'gateway_id' => Gateway::factory(),
        ];
    }
}

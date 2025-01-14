<?php

namespace App\Concerns;

trait Arrayable
{
    public static function toArray(): array
    {
        return array_column(static::cases(), 'value');
    }
}

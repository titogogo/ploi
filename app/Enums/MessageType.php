<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum MessageType: string
{
    use Arrayable;

    case TEXT = "TEXT";
}

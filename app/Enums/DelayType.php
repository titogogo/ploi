<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum DelayType: string
{
    use Arrayable;

    case MINUTE = 'minute';
    case HOUR = 'hour';
    case DAY = 'day';
}

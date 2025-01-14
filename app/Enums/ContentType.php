<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum ContentType: string
{
    use Arrayable;

    case NONE = 'None';
    case JSON = 'application/json';
    case FORM = 'application/x-www-form-urlencoded';
}

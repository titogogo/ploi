<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum MethodType: string
{
    use Arrayable;

    case GET = 'get';
    case POST = 'post';
}

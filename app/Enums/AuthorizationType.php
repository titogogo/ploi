<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum AuthorizationType: string
{
    use Arrayable;

    case PARAM = 'param';
    case HEADER = 'header';
    case TOKEN = 'bearer_token';
    case BASIC = 'basic_auth';
}

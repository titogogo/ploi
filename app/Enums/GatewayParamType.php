<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum GatewayParamType: string
{
    use Arrayable;

    case TOKEN = 'token';
    case USERNAME = 'username';
    case PASSWORD = 'password';
    case MESSAGE = 'message';
    case SOURCE = 'source';
    case UNICODE = 'unicode';
    case DESTINATION = 'destination';
    case CUSTOM = 'custom';
}

<?php

namespace App\Enums;

enum GatewayType: string
{
    case HTTP = 'http';
    case SMPP = 'smpp';
}

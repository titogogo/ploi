<?php

namespace App\Enums;

enum TransactionType: string
{
    case INTERNAL = 'internal';
    case EXTERNAL = 'external';
}

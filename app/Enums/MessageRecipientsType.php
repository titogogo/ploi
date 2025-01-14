<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum MessageRecipientsType: string
{
    use Arrayable;

    case NUMBERS = 'numbers';
    case ADDRESS_BOOK = 'address_book';
    case FILE = 'file';
}

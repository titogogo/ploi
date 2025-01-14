<?php

namespace App\Enums;

use App\Concerns\Arrayable;

enum EncodingType: string
{
    use Arrayable;

    case NONE = 'None';
    case GSM7 = 'gsm7';
    case UCS2 = 'ucs-2';
    case UTF8 = 'UTF-8';
    case UTF16 = 'UTF-16';
    case UTF32 = 'UTF-32';
    case ISO88519 = 'iso-8859-1';
    case UCS2BE = 'ucs-2be';
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduledMessageRecipient extends Model
{
    protected $fillable = [
        'phone',
    ];
}

<?php

namespace App\Enums;

enum ScheduledMessageStatus: string
{
    case PENDING = 'pending';
    case QUEUED = 'queued';
    case ERROR = 'error';
    case RETRYING = 'retrying';
    case COMPLETED = 'completed';
    case COMPLETED_WITH_ERRORS = 'completed_with_errors';
    case STOPPED = 'stopped';
    case STOPPING = 'stopping';
}

<?php

namespace App\Enums;

enum JobType: string
{
    case Scheduled = "scheduled";
    case Unscheduled = "unscheduled";
}

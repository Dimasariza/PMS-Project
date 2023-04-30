<?php

namespace App\Enums;

enum AccessTitle: string
{
    case SHIP_LIST = 'shipList';
    case SHIP_DETAILS = 'shipDetails';
    case JOB_LIST = 'jobList';
    case DATA_SHEET = 'dataSheet';
    case STOCK = 'stock';
    case USERS = 'users';
    case DEPARTMENT = 'department';
    case INBOX = 'inbox';

    /**
     * Convert all access title to array column
     */
    public static function toArrayColumn(): array
    {
        return array_column(AccessTitle::cases(), 'value');
    }
}

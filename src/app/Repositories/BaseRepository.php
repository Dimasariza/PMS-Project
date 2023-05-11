<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use stdClass;

class BaseRepository
{
    /**
     * default max total data can be load per page in pagination
     */
    protected int $defaultMaxPaginate = 10;

    /**
     * Convert instance into stdClass
     *
     * @param  Illuminate\Database\Eloquent\Model  $model
     */
    protected function format(Model|array $instance): stdClass
    {
        return (object) $instance;
    }
}

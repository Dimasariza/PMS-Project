<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use stdClass;

class BaseRepository
{
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

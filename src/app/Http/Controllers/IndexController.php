<?php

namespace App\Http\Controllers;

use App\Traits\APIResponse;

class IndexController extends Controller
{
    use APIResponse;

    public function __invoke()
    {
        return $this->successResponse(null, "OK");
    }
}

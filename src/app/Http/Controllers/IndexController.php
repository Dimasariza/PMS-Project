<?php

namespace App\Http\Controllers;

use App\Traits\APIResponse;
use Mail;
use App\Mail\ShipMail;

class IndexController extends Controller
{
    use APIResponse;

    public function __invoke()
    {
        $recipient = 'papua.scs@gmail.com';
        $subject = 'Ship Data';
        $body = 'This is ship data from 23-06-2023';
        Mail::to($recipient)->send(new ShipMail($subject, $body));
        return $this->successResponse(null, 'OK');
    }
}

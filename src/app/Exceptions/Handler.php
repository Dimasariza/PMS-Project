<?php

namespace App\Exceptions;

use App\Traits\APIResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    use APIResponse;

    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (MethodNotAllowedHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return $this->failResponse("Method not allowed", Response::HTTP_METHOD_NOT_ALLOWED);
            }

            return $this->failResponse("Not acceptable", Response::HTTP_NOT_ACCEPTABLE);
        });

        $this->renderable(function (ModelNotFoundException $e, Request $request) {
            if ($request->is('api/*')) {
                return $this->failResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
            }

            return $this->failResponse("Not acceptable", Response::HTTP_NOT_ACCEPTABLE);
        });
    }
}

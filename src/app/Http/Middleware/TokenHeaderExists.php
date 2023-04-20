<?php

namespace App\Http\Middleware;

use App\Traits\APIResponse;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenHeaderExists
{
    use APIResponse;

    /**
     * Check if bearer token exists.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if($request->bearerToken() == "") {
            return $this->failResponse("Unauthenticated", Response::HTTP_FORBIDDEN);
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use App\Traits\APIResponse;
use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class HasAccessTitle
{
    use APIResponse;

    /**
     * Check authorization of the token.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        $token = $request->bearerToken();
        $user = PersonalAccessToken::findToken($token);
        $abilities = $user->abilities;

        if(!$user) {
            return $this->failResponse("Unauthenticated", Response::HTTP_FORBIDDEN);
        }

        foreach ($roles as $role) {
            if(in_array($role, $abilities)) {
                return $next($request);
            }
        }

        return $this->failResponse("Unauthorized", Response::HTTP_UNAUTHORIZED);
    }
}

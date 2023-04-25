<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Services\Auth\AuthService;
use App\Traits\APIResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class AuthenticationController extends Controller
{
    use APIResponse;

    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $user = $this->authService->login($credentials);

        if(!$user) {
            return $this->failResponse("Bad credentials", Response::HTTP_BAD_REQUEST);
        }

        return $this->successResponse(UserResource::make($user), "Authenticated", Response::HTTP_OK);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        if(is_null($token)) {
            return $this->failResponse("Bad credentials", Response::HTTP_BAD_REQUEST);
        }

        $deleted = $this->authService->logout($token);

        if(!$deleted) {
            return $this->failResponse("Invalid credentials", Response::HTTP_BAD_REQUEST);
        }

        return $this->successResponse(null, "Logout success", Response::HTTP_OK);
    }
}

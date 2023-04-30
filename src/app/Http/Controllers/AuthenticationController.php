<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Services\Auth\AuthService;
use App\Traits\APIResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group Authentication
 *
 * APIs for authenticating user
 */
class AuthenticationController extends Controller
{
    use APIResponse;

    public function __construct(
        protected AuthService $authService
    ) {}

    /**
     * Login
     *
     * Login an user.
     *
     * @bodyParam username string required Username of the user. Example: superadmin
     * @bodyParam password string required Password of the user. Example: user1234
     *
     * @responseFile status=200 scenario='Success' response/auth/success.json
     * @responseFile status=422 scenario='Without Username' response/auth/without_username.json
     * @responseFile status=422 scenario='Without Password' response/auth/without_password.json
     * @responseFile status=422 scenario='Without Any Input' response/auth/without_any_creds.json
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $user = $this->authService->login($credentials);

        if(!$user) {
            return $this->failResponse("Bad credentials", Response::HTTP_BAD_REQUEST);
        }

        return $this->successResponse(UserResource::make($user), "Authenticated", Response::HTTP_OK);
    }

    /**
     * Logout
     *
     * Logout an user.
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/auth/logout_success.json
     * @responseFile status=400 scenario='With Same Token' response/auth/logout_same_token_or_unknown.json
     * @responseFile status=400 scenario='Unknown Token' response/auth/logout_same_token_or_unknown.json
     * @responseFile status=400 scenario='Without Any Token' response/auth/without_any_token.json
     */
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

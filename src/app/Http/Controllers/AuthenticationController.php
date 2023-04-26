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

    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * Login
     *
     * Login an user.
     *
     * @bodyParam username string required Username of the user. Example: superadmin
     * @bodyParam password string required Password of the user. Example: user1234
     *
     * @response 200 {"statusCode":200,"message":"Authenticated","data":{"id":16,"username":"superadmin","fullname":"LeBron Juara NBA 2K23","email":"admin@gmail.com","workPlace":"office","status":true,"document":"some_document.pdf","createdAt":"2023-04-26 12:56:31","updatedAt":"2023-04-26 12:56:31","department":{"id":5,"name":"Dr. Destiney Fadel II","code":"BY","workPlace":"96159 Abernathy Field Suite 772\nCronamouth, WI 79459"},"title":{"id":4,"name":"Admin","access":{"stock":true,"users":true,"jobList":true,"shipList":true,"dataSheet":true,"department":true,"shipDetails":true},"createdAt":"2023-04-26 12:56:29"},"token":"2|vQYUWZT1wmiieHl4AhPg3ajkEv1g4mmLVn9tclPh"}}
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
     * @response { "statusCode": 200, "message": "Logout success" }
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

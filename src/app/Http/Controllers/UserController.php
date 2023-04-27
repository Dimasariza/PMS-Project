<?php

namespace App\Http\Controllers;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Http\Requests\User\InsertUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserCreatedResource;
use App\Http\Resources\User\UserUpdatedResource;
use App\Http\Resources\UserResource;
use App\Services\User\UserService;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

/**
 * @group User
 *
 * APIs for user in general
 */
class UserController extends Controller
{
    use APIResponse;

    public function __construct(
        protected UserService $service,
    ){}

    /**
     * All
     *
     * Get list of user
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/user/all.json
     */
    public function index()
    {
        return $this->successResponse(
            UserResource::collection(
                $this->service->all(),
            )
        );
    }

    public function store(InsertUserRequest $request)
    {
        $result = $this->service->store(
            InsertUserDTO::fromRequest($request),
        );

        return $this->successResponse(
            UserCreatedResource::make($result),
            "Created",
            Response::HTTP_CREATED,
        );
    }

    /**
     * Get One
     *
     * Get one user
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @urlParam id integer required The ID of user title to update. Example: 2

     * @authenticated
     *
     * @bodyParam titleName string required The name of the new user title. Example: Admiral
     * @bodyParam titleAccess string required The list of access title (can be json type / json stringify). Example: {\"shipList\":false,\"shipDetails\":false,\"jobList\":true,\"dataSheet\":true,\"stock\":false,\"users\":true,\"department\":true,\"inbox\":true}
     *
     * @responseFile status=200 scenario='Success' response/userTitle/updated.json
     */
    public function show(string $id)
    {
        return $this->successResponse(
            UserCreatedResource::make(
                $this->service->show($id)
            )
        );
    }

    public function update(UpdateUserRequest $request, string $id)
    {
        $result = $this->service->update(
            $id,
            UpdateUserDTO::fromRequest($request),
        );

        return $this->successResponse(
            UserUpdatedResource::make($result),
            "Updated",
        );
    }
}

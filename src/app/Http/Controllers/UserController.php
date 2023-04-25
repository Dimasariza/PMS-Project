<?php

namespace App\Http\Controllers;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Http\Requests\User\InsertUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserResource;
use App\Services\User\UserService;
use App\Traits\APIResponse;

class UserController extends Controller
{
    use APIResponse;

    public function __construct(
        protected UserService $service,
    ){}

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
            UserResource::make($result),
            "Created",
            Response::HTTP_CREATED,
        );
    }

    public function show(string $id)
    {
        return $this->successResponse(
            UserResource::make(
                $this->service->show($id)
            )
        );
    }

    public function update(UpdateUserRequest $request, string $id)
    {
        $result = $this->repository->update(
            $id,
            UpdateUserDTO::fromRequest($request),
        );

        return $this->successResponse(
            UpdatedUserTitleResource::make($result),
            "Updated",
        );
    }
}

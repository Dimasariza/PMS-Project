<?php

namespace App\Http\Controllers;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Http\Requests\User\InsertUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserCreatedResource;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserUpdatedResource;
use App\Repositories\User\UserRepository;
use App\Traits\APIResponse;
use App\Traits\FileUtils;

/**
 * @group User
 *
 * APIs for user in general
 */
class UserController extends Controller
{
    use APIResponse, FileUtils;

    public function __construct(
        protected UserRepository $repository,
    ) {
    }

    /**
     * All
     *
     * Get list of user
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/user/all.json
     */
    public function index()
    {
        return $this->successResponse(
            UserResource::collection(
                $this->repository->getAll(),
            )
        );
    }

    /**
     * Create
     *
     * Get list of user
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @header Content-Type multipart/form-data
     *
     * @authenticated
     *
     * @bodyParam username string required Username of user. Example: sundelbolong
     * @bodyParam fullname string required Fullname of user. Example: Sundel Bolong
     * @bodyParam departmentId int required Id department of user. Example: 1
     * @bodyParam userTitleId int required Id Title of user. Example: 1
     * @bodyParam email string required Email of user. Example: sundelbolong@gmail.com
     * @bodyParam password string required Password of user. Example: sundel123
     * @bodyParam workPlace string required Workplace of user (only ship or office). Example: ship
     * @bodyParam status boolean required Status of user (only true or false). Example: true
     * @bodyParam document file optional The image of user. Example: public/example.jpg
     *
     * @responseFile status=200 scenario='Success' response/user/created.json
     */
    public function store(InsertUserRequest $request)
    {
        $url = $this->storeFile('users', $request->validated('document'));
        $dto = InsertUserDTO::fromRequest($request, $url);

        return $this->successResponse(
            UserCreatedResource::make(
                $this->repository->create($dto)
            )
        );
    }

    /**
     * Get One
     *
     * Get one user
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @urlParam id integer required The ID of user title. Example: 5

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/user/get_one.json
     */
    public function show(string $id)
    {
        return $this->successResponse(
            UserCreatedResource::make(
                $this->repository->show($id)
            )
        );
    }

    /**
     * Update
     *
     * Update an user
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @header Content-Type multipart/form-data
     *
     * @urlParam id integer required The ID of user title to update. Example: 5
     *
     * @authenticated
     *
     * @bodyParam fullname string required Fullname of user. Example: Saia Sundel Bolong
     * @bodyParam departmentId int required Id department of user. Example: 1
     * @bodyParam userTitleId int required Id Title of user. Example: 1
     * @bodyParam workPlace string required Workplace of user (only ship or office). Example: ship
     * @bodyParam status boolean required Status of user (only true or false). Example: true
     * @bodyParam document file optional The image of user. Example: public/example.jpg
     *
     * @responseFile status=200 scenario='Success' response/user/updated.json
     */
    public function update(string $id, UpdateUserRequest $request)
    {
        $user = $this->repository->show($id);
        $url = $this->replaceFile('users', $user->document, $request->validated('document'));

        $dto = UpdateUserDTO::fromRequest($request, $url);

        $result = $this->repository->update($id, $dto);

        return $this->successResponse(
            UserUpdatedResource::make($result),
            'Updated',
        );
    }
}

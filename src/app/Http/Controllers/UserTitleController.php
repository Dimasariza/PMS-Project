<?php

namespace App\Http\Controllers;

use App\DTO\UserTitle\UserTitleDTO;
use App\Http\Requests\UserTitle\InsertUserTitleRequest;
use App\Http\Requests\UserTitle\UpdateUserTitleRequest;
use App\Http\Resources\UserTitle\UpdatedUserTitleResource;
use App\Http\Resources\UserTitle\UserTitleResource;
use App\Repositories\UserTitle\UserTitleRepository;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

/**
 * @group User Title
 *
 * APIs for user title
 */
class UserTitleController extends Controller
{
    use APIResponse;

    public function __construct(
        protected UserTitleRepository $repository
    ) {}

    /**
     * All
     *
     * Get list of user title
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/userTitle/all.json
     */
    public function index()
    {
        return $this->successResponse(
            UserTitleResource::collection(
                $this->repository->getAll()
            )
        );
    }

    /**
     * Create User Title
     *
     * Create new user title
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     * @authenticated
     *
     * @urlParam id integer required The ID of user title to update. Example: 2
     *
     * @bodyParam titleName string required The name of the new user title. Example: General
     * @bodyParam titleAccess string required The list of access title (can be json type / json stringify). Example: {\"shipList\":false,\"shipDetails\":false,\"jobList\":true,\"dataSheet\":true,\"stock\":false,\"users\":true,\"department\":true,\"inbox\":true}
     *
     * @responseFile status=200 scenario='Success' response/userTitle/insert_new.json
     * @responseFile status=422 scenario='Access Title field is missing' response/userTitle/insert_len_access.json
     */
    public function store(InsertUserTitleRequest $request)
    {
        $result = $this->repository->create(
            UserTitleDTO::fromRequest($request),
        );

        return $this->successResponse(
            UserTitleResource::make($result),
            "Created",
            Response::HTTP_CREATED,
        );
    }


    /**
     * Update User Title
     *
     * Update new user title
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @authenticated
     *
     * @bodyParam titleName string required The name of the new user title. Example: Admiral
     * @bodyParam titleAccess string required The list of access title (can be json type / json stringify). Example: {\"shipList\":false,\"shipDetails\":false,\"jobList\":true,\"dataSheet\":true,\"stock\":false,\"users\":true,\"department\":true,\"inbox\":true}
     *
     * @responseFile status=200 scenario='Success' response/userTitle/updated.json
     */
    public function update($id, UpdateUserTitleRequest $request)
    {
        $result = $this->repository->update(
            $id,
            UserTitleDTO::fromRequest($request),
        );

        return $this->successResponse(
            UpdatedUserTitleResource::make($result),
            "Updated",
        );
    }
}

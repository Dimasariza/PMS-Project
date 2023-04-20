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

class UserTitleController extends Controller
{
    use APIResponse;

    public function __construct(
        protected UserTitleRepository $repository
    ) {}

    /**
     * Display a listing of the resource.
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
     * Store a newly created resource in storage.
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
     * Update the specified resource in storage.
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

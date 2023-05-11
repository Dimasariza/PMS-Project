<?php

namespace App\Http\Controllers;

use App\DTO\JobList\JobListDTO;
use App\Http\Requests\JobList\CreateJobListRequest;
use App\Http\Requests\JobList\UpdateJobListRequest;
use App\Http\Resources\JobList\JobListCollection;
use App\Http\Resources\JobList\JobListCreatedResource;
use App\Http\Resources\JobList\JobListResource;
use App\Http\Resources\JobList\JobListUpdatedResource;
use App\Repositories\JobList\JobListRepository;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

/**
 * @group JobList
 *
 * APIs for JobList
 */
class JobListController extends Controller
{
    use APIResponse;

    public function __construct(
        protected JobListRepository $repository
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->successResponse(
            new JobListCollection(
                $this->repository->getAll(),
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateJobListRequest $request)
    {
        $result = $this->repository->create(
            JobListDTO::fromRequest($request),
        );

        return $this->successResponse(
            JobListCreatedResource::make($result),
            'Created',
            Response::HTTP_CREATED,
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        return $this->successResponse(
            JobListResource::make($this->repository->show($id)),
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string|int $id, UpdateJobListRequest $request)
    {
        $result = $this->repository->update(
            $id,
            JobListDTO::fromRequest($request)
        );

        return $this->successResponse(
            JobListUpdatedResource::make($result),
            'Updated',
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        $this->repository->delete($id);

        return $this->successResponse(null, 'Deleted');
    }
}

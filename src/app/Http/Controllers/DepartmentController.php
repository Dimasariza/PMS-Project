<?php

namespace App\Http\Controllers;

use App\DTO\Department\DepartmentDTO;
use App\Http\Requests\Department\CreateDepartmentRequest;
use App\Http\Requests\Department\UpdateDepartmentRequest;
use App\Http\Resources\Department\DepartmentCreatedResource;
use App\Http\Resources\Department\DepartmentResource;
use App\Http\Resources\Department\DepartmentUpdatedResource;
use App\Repositories\Department\DepartmentRepository;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

class DepartmentController extends Controller
{
    use APIResponse;

    public function __construct(
        protected DepartmentRepository $repository
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->successResponse(DepartmentResource::collection(
            $this->repository->getAll()
        ));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateDepartmentRequest $request)
    {
        $result = $this->repository->create(
            DepartmentDTO::fromRequest($request),
        );

        return $this->successResponse(
            DepartmentCreatedResource::make($result),
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
            DepartmentResource::make($this->repository->show($id)),
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string|int $id, UpdateDepartmentRequest $request)
    {
        $result = $this->repository->update(
            $id,
            DepartmentDTO::fromRequest($request)
        );

        return $this->successResponse(
            DepartmentUpdatedResource::make($result),
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

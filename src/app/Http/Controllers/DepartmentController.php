<?php

namespace App\Http\Controllers;

use App\DTO\Department\DepartmentDTO;
use App\Http\Requests\Department\CreateDepartmentRequest;
use App\Http\Requests\Department\UpdateDepartmentRequest;
use App\Http\Resources\Department\DepartmentCollection;
use App\Http\Resources\Department\DepartmentCreatedResource;
use App\Http\Resources\Department\DepartmentResource;
use App\Http\Resources\Department\DepartmentUpdatedResource;
use App\Repositories\Department\DepartmentRepository;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

/**
 * @group Department
 *
 * APIs for department
 */
class DepartmentController extends Controller
{
    use APIResponse;

    public function __construct(
        protected DepartmentRepository $repository
    ) {
    }

    /**
     * All
     *
     * Get list of department
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/department/all.json
     */
    public function index()
    {
        return $this->successResponse(
            new DepartmentCollection(
                $this->repository->getAll()
            )
        );
    }

    /**
     * Create
     *
     * Get list of department
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @authenticated
     *
     * @bodyParam departmentName string required department name. Example: Project Department
     * @bodyParam departmentCode string required department code (unique). Example: SB-789
     * @bodyParam workPlace string required workplace (ship or office). Example: ship
     *
     * @responseFile status=200 scenario='Success' response/department/created.json
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
     * Get One
     *
     * Get one department detail
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @urlParam id integer required The ID of department. Example: 5

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/department/find_one.json
     */
    public function show(string|int $id)
    {
        return $this->successResponse(
            DepartmentResource::make($this->repository->show($id)),
        );
    }

    /**
     * Update
     *
     * update one of department
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @authenticated
     *
     * @bodyParam departmentName string required department name. Example: Project Department
     * @bodyParam departmentCode string required department code (unique). Example: SB-789
     * @bodyParam workPlace string required workplace (ship or office). Example: office
     *
     * @responseFile status=200 scenario='Success' response/department/updated.json
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
     * Delete
     *
     * Delete one department
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @urlParam id integer required The ID of department. Example: 5

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/department/delete.json
     */
    public function destroy(string|int $id)
    {
        $this->repository->delete($id);

        return $this->successResponse(null, 'Deleted');
    }
}

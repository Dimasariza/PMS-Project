<?php

namespace App\Repositories\Department;

use App\DTO\Department\DepartmentDTO;
use App\Models\Department;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;

class DepartmentRepositoryImpl extends BaseRepository implements DepartmentRepository
{
    public function __construct(
        protected Department $model,
    ) {
    }

    public function getAll(): LengthAwarePaginator
    {
        return $this->model::query()->paginate(10, ['id', 'department_name', 'department_code', 'work_place', 'deleted_at']);
    }

    public function create(DepartmentDTO $dto): Model
    {
        $result = $this->model->create($dto->build());

        return $result;
    }

    public function show(string|int $id): Model
    {
        $department = $this->model->findOr(
            id: $id,
            columns: ['id', 'department_name', 'department_code', 'work_place'],
            callback: fn () => throw new ModelNotFoundException('Unknown department')
        );

        return $department;
    }

    public function update(int|string $id, DepartmentDTO $dto): Model
    {
        $department = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown department')
        );

        $department->update($dto->build());

        return $department;
    }

    public function delete(string|int $id): void
    {
        $department = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown department')
        );

        $department->delete();
    }
}

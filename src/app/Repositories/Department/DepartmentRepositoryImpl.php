<?php

namespace App\Repositories\Department;

use App\DTO\Department\DepartmentDTO;
use App\Models\Department;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use stdClass;

class DepartmentRepositoryImpl extends BaseRepository implements DepartmentRepository
{
    public function __construct(
        protected Department $model,
    ) {}

    public function getAll(): Collection
    {
        return $this->model->all(['id', 'department_name', 'department_code', 'work_place']);
    }

    public function create(DepartmentDTO $dto): stdClass
    {
        $result = $this->model->create($dto->build());

        return $this->format($result->toArray());
    }

    public function show(string|int $id): stdClass
    {
        $department = $this->model->findOr(
            $id,
            ['id', 'department_name', 'department_code', 'work_place'],
            fn () => throw new ModelNotFoundException("Unknown department")
        );

        return $this->format($department->toArray());
    }

    public function update(int|string $id, DepartmentDTO $dto): stdClass
    {
        $department = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException("Unknown department")
        );

        $department->update($dto->build());

        return $this->format($department->toArray());
    }

    public function delete(string|int $id): void
    {
        $department = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException("Unknown department")
        );

        $department->delete();
    }
}

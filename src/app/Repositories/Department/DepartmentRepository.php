<?php

namespace App\Repositories\Department;

use App\DTO\Department\DepartmentDTO;
use Illuminate\Pagination\LengthAwarePaginator;
use stdClass;

interface DepartmentRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(DepartmentDTO $dto): stdClass;

    public function show(string|int $id): stdClass;

    public function update(int|string $id, DepartmentDTO $dto): stdClass;

    public function delete(string|int $id): void;
}

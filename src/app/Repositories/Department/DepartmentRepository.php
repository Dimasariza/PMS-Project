<?php

namespace App\Repositories\Department;

use App\DTO\Department\DepartmentDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface DepartmentRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(DepartmentDTO $dto): Model;

    public function show(string|int $id): Model;

    public function update(int|string $id, DepartmentDTO $dto): Model;

    public function delete(string|int $id): void;
}

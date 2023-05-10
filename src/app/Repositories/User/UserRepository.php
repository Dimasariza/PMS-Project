<?php

namespace App\Repositories\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use Illuminate\Pagination\LengthAwarePaginator;
use stdClass;

interface UserRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(InsertUserDTO $dto): stdClass;

    public function update(int|string $id, UpdateUserDTO $dto): stdClass;

    public function show(string $id): stdClass;
}

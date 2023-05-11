<?php

namespace App\Repositories\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface UserRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(InsertUserDTO $dto): Model;

    public function update(int|string $id, UpdateUserDTO $dto): Model;

    public function show(string $id): Model;
}

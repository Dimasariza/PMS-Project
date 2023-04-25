<?php

namespace App\Repositories\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

interface UserRepository
{
    public function getAll(): Collection;

    public function create(InsertUserDTO $dto): stdClass;

    public function update(int|string $id, UpdateUserDTO $dto): stdClass;

    public function show(string $id): stdClass;
}

<?php

namespace App\Services\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

interface UserService
{
    public function all(): Collection;
    public function store(InsertUserDTO $dto): stdClass;
    public function show(int|string $id): stdClass;
    public function update(int|string $id, UpdateUserDTO $dto): stdClass;
}

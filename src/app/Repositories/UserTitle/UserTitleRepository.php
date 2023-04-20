<?php

namespace App\Repositories\UserTitle;

use App\DTO\UserTitle\UserTitleDTO;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

interface UserTitleRepository
{
    public function getAll(): Collection;

    public function create(UserTitleDTO $dto): stdClass;

    public function update(int|string $id, UserTitleDTO $dto): stdClass;
}

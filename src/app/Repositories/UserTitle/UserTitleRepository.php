<?php

namespace App\Repositories\UserTitle;

use App\DTO\UserTitle\UserTitleDTO;
use Illuminate\Pagination\LengthAwarePaginator;
use stdClass;

interface UserTitleRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(UserTitleDTO $dto): stdClass;

    public function update(int|string $id, UserTitleDTO $dto): stdClass;
}

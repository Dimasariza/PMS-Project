<?php

namespace App\Repositories\UserTitle;

use App\DTO\UserTitle\UserTitleDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface UserTitleRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(UserTitleDTO $dto): Model;

    public function update(int|string $id, UserTitleDTO $dto): Model;
}

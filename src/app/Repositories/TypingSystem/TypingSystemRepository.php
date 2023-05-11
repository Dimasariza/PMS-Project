<?php

namespace App\Repositories\TypingSystem;

use App\DTO\TypingSystem\TypingSystemDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface TypingSystemRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(TypingSystemDTO $dto): Model;

    public function show(string|int $id): Model;

    public function update(int|string $id, TypingSystemDTO $dto): Model;

    public function delete(string|int $id): void;
}

<?php

namespace App\Repositories\TypingSystem;

use App\DTO\TypingSystem\TypingSystemDTO;
use App\Models\TypingSystem;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;

class TypingSystemRepositoryImpl extends BaseRepository implements TypingSystemRepository
{
    public function __construct(
        protected TypingSystem $model,
    ) {
    }

    public function getAll(): LengthAwarePaginator
    {
        return $this->model::query()->paginate(10);
    }

    public function create(TypingSystemDTO $dto): Model
    {
        $result = $this->model->create($dto->build());

        return $result;
    }

    public function show(string|int $id): Model
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown TypingSystem')
        );

        return $result;
    }

    public function update(int|string $id, TypingSystemDTO $dto): Model
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown TypingSystem')
        );

        $result->update($dto->build());

        return $result;
    }

    public function delete(string|int $id): void
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown TypingSystem')
        );

        $result->delete();
    }
}

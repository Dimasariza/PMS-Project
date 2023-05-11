<?php

namespace App\Repositories\JobList;

use App\DTO\JobList\JobListDTO;
use App\Models\JobList;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;

class JobListRepositoryImpl extends BaseRepository implements JobListRepository
{
    public function __construct(
        protected JobList $model,
    ) {
    }

    public function getAll(): LengthAwarePaginator
    {
        return $this->model::with(['department', 'ship', 'typingSystem'])->paginate(10);
    }

    public function create(JobListDTO $dto): Model
    {
        $result = $this->model->create($dto->build())->load(['department', 'ship', 'typingSystem']);

        return $result;
    }

    public function show(string|int $id): Model
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        return $result->load(['department', 'ship', 'typingSystem']);
    }

    public function update(int|string $id, JobListDTO $dto): Model
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        $result->update($dto->build());

        return $result->load(['department', 'ship', 'typingSystem']);
    }

    public function delete(string|int $id): void
    {
        $result = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        $result->delete();
    }
}

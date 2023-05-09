<?php

namespace App\Repositories\JobList;

use App\DTO\JobList\JobListDTO;
use App\Models\JobList;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use stdClass;

class JobListRepositoryImpl extends BaseRepository implements JobListRepository
{
    public function __construct(
        protected JobList $model,
    ) {
    }

    public function getAll(): Collection
    {
        return $this->model->all();
    }

    public function create(JobListDTO $dto): stdClass
    {
        $result = $this->model->create($dto->build());

        return $this->format($result->toArray());
    }

    public function show(string|int $id): stdClass
    {
        $result = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        return $this->format($result->toArray());
    }

    public function update(int|string $id, JobListDTO $dto): stdClass
    {
        $result = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        $result->update($dto->build());

        return $this->format($result->toArray());
    }

    public function delete(string|int $id): void
    {
        $result = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown JobList')
        );

        $result->delete();
    }
}

<?php

namespace App\Repositories\JobList;

use App\DTO\JobList\JobListDTO;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

interface JobListRepository
{
    public function getAll(): Collection;

    public function create(JobListDTO $dto): stdClass;

    public function show(string|int $id): stdClass;

    public function update(int|string $id, JobListDTO $dto): stdClass;

    public function delete(string|int $id): void;
}

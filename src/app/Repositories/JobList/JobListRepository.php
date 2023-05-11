<?php

namespace App\Repositories\JobList;

use App\DTO\JobList\JobListDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface JobListRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(JobListDTO $dto): Model;

    public function show(string|int $id): Model;

    public function update(int|string $id, JobListDTO $dto): Model;

    public function delete(string|int $id): void;
}

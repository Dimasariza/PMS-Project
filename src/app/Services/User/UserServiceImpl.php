<?php

namespace App\Services\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Repositories\User\UserRepository;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

class UserServiceImpl implements UserService
{
    private string $documentPath = "/user/document";

    public function __construct(
        protected UserRepository $repository
    ) {}

    public function all(): Collection
    {
        return $this->repository->getAll();
    }

    public function store(InsertUserDTO $dto): stdClass
    {
        return $this->repository->create($dto);
    }

    public function show(int|string $id): stdClass
    {
        return $this->repository->show($id);
    }

    public function update(int|string $id, UpdateUserDTO $dto): stdClass
    {
        return $this->repository->update($id, $dto);
    }
}

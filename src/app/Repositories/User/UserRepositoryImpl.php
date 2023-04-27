<?php

namespace App\Repositories\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Models\User;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use stdClass;

class UserRepositoryImpl extends BaseRepository implements UserRepository
{
    public function __construct(
        protected User $model,
    ) {}

    public function getAll(): Collection
    {
        return $this->model::with(['department', 'user_title'])->get();
    }

    public function create(InsertUserDTO $dto): stdClass
    {
        $result = $this->model->create($dto->build())->load(['department', 'user_title']);
        return $this->format($result->toArray());
    }

    public function update(int|string $id, UpdateUserDTO $dto): stdClass
    {
        $user = $this->model::with(['department', 'user_title'])->find($id);

        if(!$user) {
            throw new ModelNotFoundException("Unknown user");
        }

        $user->update($dto->build());

        return $this->format(
            $user->load(['department', 'user_title'])->toArray()
        );
    }

    public function show(int|string $id): stdClass
    {
        $user = $this->model::with(['department', 'user_title'])->find($id);

        if(!$user) {
            throw new ModelNotFoundException("Unknown user");
        }

        return $this->format($user->toArray());
    }
}

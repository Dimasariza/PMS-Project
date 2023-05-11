<?php

namespace App\Repositories\User;

use App\DTO\User\InsertUserDTO;
use App\DTO\User\UpdateUserDTO;
use App\Models\User;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class UserRepositoryImpl extends BaseRepository implements UserRepository
{
    public function __construct(
        protected User $model,
    ) {
    }

    public function getAll(): LengthAwarePaginator
    {
        return $this->model::with(['department', 'user_title'])->paginate(10);
    }

    public function create(InsertUserDTO $dto): Model
    {
        $result = $this->model->create($dto->build())->load(['department', 'user_title']);

        return $result;
    }

    public function update(int|string $id, UpdateUserDTO $dto): Model
    {
        $user = $this->model::with(['department', 'user_title'])
            ->findOr(
                id: $id,
                callback: fn () => throw new ModelNotFoundException('Unknown user')
            );

        $user->update($dto->build());

        return $user->load(['department', 'user_title']);
    }

    public function show(int|string $id): Model
    {
        $user = $this->model::with(['department', 'user_title'])->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown user')
        );

        return $user;
    }
}

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
        return $this->format(
            $this->model->create($dto->build())->tArray(),
        );
    }

    public function update(int|string $id, UpdateUserDTO $dto): stdClass
    {
        $user = $this->model::with(['department', 'user_title'])->find($id);

        if(!$user) {
            throw new ModelNotFoundException("Unknown user");
        }

        $user->username = $dto->username;
        $user->fullname = $dto->fullname;
        $user->department_id = $dto->departmentId;
        $user->email = $dto->email;
        $user->user_title_id = $dto->userTitleId;
        $user->work_place = $dto->workPlace;
        $user->status = $dto->status;

        if($dto->document) {
            $user->document = $dto->document;
        }

        $user->save();

        return $this->format($user);
    }

    public function show(int|string $id): stdClass
    {
        $user = $this->model::with(['department', 'user_title'])->find($id);

        if(!$user) {
            throw new ModelNotFoundException("Unknown user");
        }

        return $this->format($user);
    }
}

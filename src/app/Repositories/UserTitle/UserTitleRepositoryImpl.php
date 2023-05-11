<?php

namespace App\Repositories\UserTitle;

use App\DTO\UserTitle\UserTitleDTO;
use App\Models\UserTitle;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;

class UserTitleRepositoryImpl extends BaseRepository implements UserTitleRepository
{
    public function __construct(
        protected UserTitle $model,
    ) {
    }

    /**
     * Get id and title name from all user title
     *
     * @return array
     */
    public function getAll(): LengthAwarePaginator
    {
        return $this->model::query()->paginate(10, ['id', 'title_name', 'access']);
    }

    public function create(UserTitleDTO $dto): Model
    {
        $result = $this->model->create($dto->build());

        return $result;
    }

    public function update(int|string $id, UserTitleDTO $dto): Model
    {
        $userTitle = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown user title')
        );

        $userTitle->update($dto->build());

        return $userTitle;
    }
}

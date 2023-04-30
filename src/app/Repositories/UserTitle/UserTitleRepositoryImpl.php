<?php

namespace App\Repositories\UserTitle;

use App\DTO\UserTitle\UserTitleDTO;
use App\Models\UserTitle;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use stdClass;

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
    public function getAll(): Collection
    {
        return $this->model->all(['id', 'title_name', 'access']);
    }

    /**
     * Create new user title
     *
     * @param  App\DTO\UserTitle\UserTitleDTO  $dto
     */
    public function create(UserTitleDTO $dto): stdClass
    {
        $result = $this->model->create($dto->build());

        return $this->format($result->toArray());
    }

    /**
     * Update an user title
     *
     * @param  App\DTO\UserTitle\UserTitleDTO  $dto
     *
     * @throws Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function update(int|string $id, UserTitleDTO $dto): stdClass
    {
        $userTitle = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown user title')
        );

        $userTitle->update($dto->build());

        return $this->format(
            $userTitle->toArray(),
        );
    }
}

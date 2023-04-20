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
    ){}

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
     * @param  App\DTO\UserTitle\UserTitleDTO $dto
     * @return stdClass
     */
    public function create(UserTitleDTO $dto): stdClass
    {
        return $this->format(
            $this->model->create([
                'title_name' => $dto->titleName,
                'access' => $dto->access,
            ])->toArray()
        );
    }


    /**
     * Update an user title
     *
     * @param  int|string $id
     * @param  App\DTO\UserTitle\UserTitleDTO $dto
     * @return stdClass
     * @throws Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function update(int|string $id, UserTitleDTO $dto): stdClass
    {
        $userTitle = $this->model->find($id);

        if(!$userTitle) {
            throw new ModelNotFoundException("Unknown user title");
        }

        $userTitle->title_name = $dto->titleName;
        $userTitle->access = $dto->access;

        $userTitle->save();

        return $this->format(
            $userTitle->only(['id', 'title_name', 'access']),
        );
    }
}

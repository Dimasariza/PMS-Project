<?php

namespace App\Services\UserTitle;

use App\Exceptions\UserTitle\UnknownUserTitleException;
use App\Models\UserTitle;
use App\Repositories\UserTitle\UserTitleRepository;
use Illuminate\Database\Eloquent\Collection;

class UserTitleServiceImpl implements UserTitleService
{
    private UserTitleRepository $repository;

    public function __construct(UserTitleRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Get all user title
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function getAllUserTitle(): Collection
    {
        return $this->repository->getAll();
    }


    /**
     * Store a new user title
     *
     * @param  array $request
     * @return UserTitle
     */
    public function store(array $request): UserTitle
    {
        return $this->repository->insert($request);
    }


    /**
     * Update an user title
     *
     * @param  mixed $id
     * @param  mixed $request
     *
     * @return ?bool
     * @throws App\Exceptions\UserTitle\UnknownUserTitleException
     */
    public function update($id, array $request): ?bool
    {
        $exists = $this->repository->userTitleExists($id);
        if(!$exists) {
            throw new UnknownUserTitleException();
        }

        return $this->repository->update($id, $request);
    }
}

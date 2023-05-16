<?php

namespace App\Repositories\Ship;

use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use App\Models\Ship;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;
use stdClass;

class ShipRepositoryImpl extends BaseRepository implements ShipRepository
{
    public function __construct(
        protected Ship $model
    ) {
    }

    public function getAll(): LengthAwarePaginator
    {
        return $this->model::query()->paginate(10);
    }

    public function create(InsertShipDTO $dto): Model
    {
        $result = $this->model->create($dto->build());

        return $result;
    }

    public function show(string|int $id)
    {
        $ship = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown ship')
        );

        $jobLists = $ship->jobLists()->paginate(10);

        $results = new stdClass();

        $results->jobLists = $jobLists;
        $results->ship = $ship;

        return $results;
    }

    public function update(int|string $id, UpdateShipDTO $dto): Model
    {
        $ship = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown ship')
        );

        $ship->update($dto->build());

        return $ship;
    }

    public function delete(string|int $id): void
    {
        $ship = $this->model->findOr(
            id: $id,
            callback: fn () => throw new ModelNotFoundException('Unknown ship')
        );

        $ship->delete();
    }
}

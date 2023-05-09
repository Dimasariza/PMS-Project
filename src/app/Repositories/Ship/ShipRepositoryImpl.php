<?php

namespace App\Repositories\Ship;

use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use App\Models\Ship;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use stdClass;

class ShipRepositoryImpl extends BaseRepository implements ShipRepository
{
    public function __construct(
        protected Ship $model
    ) {
    }

    public function getAll(): Collection
    {
        return $this->model->all();
    }

    public function create(InsertShipDTO $dto): stdClass
    {
        $result = $this->model->create($dto->build());

        return $this->format($result->toArray());
    }

    public function show(string|int $id): stdClass
    {
        $ship = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown ship')
        );

        return $this->format($ship->toArray());
    }

    public function update(int|string $id, UpdateShipDTO $dto): stdClass
    {
        $ship = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown ship')
        );

        $ship->update($dto->build());

        return $this->format($ship->toArray());
    }

    public function delete(string|int $id): void
    {
        $ship = $this->model->findOr(
            $id,
            fn () => throw new ModelNotFoundException('Unknown ship')
        );

        $ship->delete();
    }
}

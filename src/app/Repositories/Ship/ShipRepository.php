<?php

namespace App\Repositories\Ship;

use stdClass;
use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use Illuminate\Database\Eloquent\Collection;

interface ShipRepository
{
    public function getAll(): Collection;

    public function create(InsertShipDTO $dto): stdClass;

    public function show(string|int $id): stdClass;

    public function update(int|string $id, UpdateShipDTO $dto): stdClass;

    public function delete(string|int $id): void;
}

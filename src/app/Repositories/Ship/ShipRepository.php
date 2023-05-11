<?php

namespace App\Repositories\Ship;

use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface ShipRepository
{
    public function getAll(): LengthAwarePaginator;

    public function create(InsertShipDTO $dto): Model;

    public function show(string|int $id): Model;

    public function update(int|string $id, UpdateShipDTO $dto): Model;

    public function delete(string|int $id): void;
}

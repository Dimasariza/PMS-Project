<?php

namespace App\Http\Controllers;

use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use App\Http\Requests\Ship\CreateShipRequest;
use App\Http\Requests\Ship\UpdateShipRequest;
use App\Http\Resources\Ship\ShipCreatedResource;
use App\Http\Resources\Ship\ShipResource;
use App\Http\Resources\Ship\ShipUpdatedResource;
use App\Repositories\Ship\ShipRepository;
use App\Traits\APIResponse;
use App\Traits\FileUtils;

class ShipController extends Controller
{
    use APIResponse, FileUtils;

    public function __construct(
        protected ShipRepository $repository
    ) {
    }

    public function index()
    {
        return $this->successResponse(
            ShipResource::collection(
                $this->repository->getAll(),
            )
        );
    }

    public function store(CreateShipRequest $request)
    {
        $url = $this->storeFile('ship', $request->validated('picture'));
        $dto = InsertShipDTO::fromRequest($request, $url);

        return $this->successResponse(
            ShipCreatedResource::make(
                $this->repository->create($dto)
            )
        );
    }

    public function show(string|int $id)
    {
        return $this->successResponse(
            ShipResource::make($this->repository->show($id)),
        );
    }

    public function update(string|int $id, UpdateShipRequest $request)
    {
        $ship = $this->repository->show($id);
        $url = $this->replaceFile('ship', $ship->document, $request->validated('picture'));

        $dto = UpdateShipDTO::fromRequest($request, $url);

        $result = $this->repository->update($id, $dto);

        return $this->successResponse(
            ShipUpdatedResource::make($result),
            'Updated',
        );
    }

    public function destroy(string|int $id)
    {
        $this->repository->delete($id);

        return $this->successResponse(null, 'Deleted');
    }
}

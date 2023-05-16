<?php

namespace App\Http\Controllers;

use App\DTO\Ship\InsertShipDTO;
use App\DTO\Ship\UpdateShipDTO;
use App\Http\Requests\Ship\CreateShipRequest;
use App\Http\Requests\Ship\UpdateShipRequest;
use App\Http\Resources\JobList\JobListCollection;
use App\Http\Resources\Ship\ShipCollection;
use App\Http\Resources\Ship\ShipCreatedResource;
use App\Http\Resources\Ship\ShipResource;
use App\Http\Resources\Ship\ShipUpdatedResource;
use App\Repositories\Ship\ShipRepository;
use App\Traits\APIResponse;
use App\Traits\FileUtils;

/**
 * @group Ship
 *
 * APIs for Ship
 */
class ShipController extends Controller
{
    use APIResponse, FileUtils;

    public function __construct(
        protected ShipRepository $repository
    ) {
    }

    /**
     * All
     *
     * Get list of ship
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/ship/all.json
     */
    public function index()
    {
        return $this->successResponse(
            new ShipCollection($this->repository->getAll())
        );
    }

    /**
     * Create
     *
     * Create ship
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @header Content-Type multipart/form-data
     *
     * @authenticated
     *
     * @bodyParam imoNumber string required imo_number of ship. Example: IMO69
     * @bodyParam vesselName string required vessel name of ship. Example: Vessel
     * @bodyParam flag string required flag of ship. Example: ID
     * @bodyParam picture file required The image of ship. Example: public/example.jpg
     * @bodyParam dwt int required dwt of ship. Example: 1000
     * @bodyParam grossTonage int required int of ship. Example: 1000
     * @bodyParam year int required year of ship. Example: 2023
     * @bodyParam LOA string required LOA of ship (type float). Example: 10.05
     * @bodyParam breadth string required breadth of ship (type float). Example: 11.05
     * @bodyParam vesselTypeGeneric string required vessel type generic of ship. Example: Generic
     * @bodyParam vesselTypeDetailed string required vessel type detailed of ship. Example: Detailed
     *
     * @responseFile status=200 scenario='Success' response/ship/created.json
     */
    public function store(CreateShipRequest $request)
    {
        $url = $this->storeFile('ships', $request->validated('picture'));
        $dto = InsertShipDTO::fromRequest($request, $url);

        return $this->successResponse(
            ShipCreatedResource::make(
                $this->repository->create($dto)
            )
        );
    }

    /**
     * Get One
     *
     * Get one ship detail
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @urlParam id integer required The ID of ship. Example: 1
     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/ship/find_one.json
     */
    public function show(string|int $id)
    {
        $results = $this->repository->show($id);

        return $this->successResponse([
            'ship' => ShipResource::make($results->ship),
            'jobLists' => new JobListCollection($results->jobLists)
        ]);
    }

    /**
     * Update
     *
     * Update ship
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     * @header Content-Type multipart/form-data
     *
     * @urlParam id integer required The ID of ship to update. Example: 5
     *
     * @authenticated
     *
     * @bodyParam imoNumber string required imo_number of ship. Example: IMO69
     * @bodyParam vesselName string required vessel name of ship. Example: Vessel
     * @bodyParam flag string required flag of ship. Example: ID
     * @bodyParam picture file optional The image of ship. Example: public/example.jpg
     * @bodyParam dwt int required dwt of ship. Example: 1000
     * @bodyParam grossTonage int required int of ship. Example: 1000
     * @bodyParam year int required year of ship. Example: 2023
     * @bodyParam LOA string required LOA of ship (type float). Example: 10.05
     * @bodyParam breadth string required breadth of ship (type float). Example: 11.05
     * @bodyParam vesselTypeGeneric string required vessel type generic of ship. Example: Generic
     * @bodyParam vesselTypeDetailed string required vessel type detailed of ship. Example: Detailed
     *
     * @responseFile status=200 scenario='Success' response/ship/updated.json
     */
    public function update(string|int $id, UpdateShipRequest $request)
    {
        $ship = $this->repository->show($id);

        $url = $request->validated('picture') != null
        ? $this->replaceFile('ships', $ship->picture, $request->validated('picture'))
        : $ship->picture;

        $dto = UpdateShipDTO::fromRequest($request, $url);

        $result = $this->repository->update($id, $dto);

        return $this->successResponse(
            ShipUpdatedResource::make($result),
            'Updated',
        );
    }

    /**
     * Delete
     *
     * Delete one ship
     *
     * @header Authorization Bearer 3|iMxzfuvnFX02IwrhZ8ysPCbwz359xXtR5Rts6QBv
     *
     * @urlParam id integer required The ID of ship. Example: 1

     *
     * @authenticated
     *
     * @responseFile status=200 scenario='Success' response/ship/delete.json
     */
    public function destroy(string|int $id)
    {
        $this->repository->delete($id);

        return $this->successResponse(null, 'Deleted');
    }
}

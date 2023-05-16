<?php

namespace App\Http\Resources\Ship;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $arr = [
            'id' => $this->id,
            'imoNumber' => $this->imo_number,
            'vesselName' => $this->vessel_name,
            'flag' => $this->flag,
            'picture' => $this->when(! is_null($this->picture) || $this->picture !== '', asset($this->picture)),
            'dwt' => $this->dwt,
            'grossTonage' => $this->gross_tonage,
            'year' => $this->year,
            'callsign' => $this->callsign,
            'LOA' => $this->LOA,
            'breadth' => $this->breadth,
            'vesselTypeGeneric' => $this->vessel_type_generic,
            'vesselTypeDetailed' => $this->vessel_type_detailed,
            'isDeleted' => is_null($this->deleted_at) ? false : true,
        ];

        return $arr;
    }
}

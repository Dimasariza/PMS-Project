<?php

namespace App\Http\Resources\TypingSystem;

use App\Http\Resources\Ship\ShipResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TypingSystemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'systemName' => $this->system_name,
            'runningHours' => $this->running_hours,
            'serialNumber' => $this->serial_number,
            'ship' => ShipResource::make($this->whenLoaded('ship')),
        ];
    }
}

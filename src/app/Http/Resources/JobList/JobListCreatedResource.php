<?php

namespace App\Http\Resources\JobList;

use Illuminate\Http\Request;
use App\Http\Resources\Ship\ShipResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Department\DepartmentResource;
use App\Http\Resources\TypingSystem\TypingSystemResource;

class JobListCreatedResource extends JsonResource
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
            'componentName' => $this->component_name,
            'componentCode' => $this->component_code,
            'partName' => $this->part_name,
            'jobType' => $this->job_type,
            'jobName' => $this->job_name,
            'approvedJob' => $this->approved_job,
            'personInCharge' => $this->person_in_charge,
            'status' => $this->status,
            'level' => $this->level,
            'createdAt' => date('Y-m-d H:i:s', strtotime($this->created_at)),
            'isDeleted' => is_null($this->deleted_at) ? false : true,
            'department' => DepartmentResource::make($this->whenLoaded('department')),
            'ship' => ShipResource::make($this->whenLoaded('ship')),
            'typingSystem' => TypingSystemResource::make($this->whenLoaded('typingSystem')),
        ];
    }
}

<?php

namespace App\Http\Resources\Department;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentCreatedResource extends JsonResource
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
            'name' => $this->department_name,
            'code' => $this->department_code,
            'workPlace' => $this->work_place,
            'createdAt' => date('Y-m-d H:i:s', strtotime($this->created_at)),
            'isDeleted' => is_null($this->deleted_at) ? false : true,
        ];
    }
}

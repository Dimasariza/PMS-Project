<?php

namespace App\Http\Resources\User;

use App\Http\Resources\DepartmentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCreatedResource extends JsonResource
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
            'username' => $this->username,
            'fullname' => $this->fullname,
            'email' => $this->email,
            'workPlace' => $this->work_place,
            'status' => $this->status,
            'document' => $this->document,
            'createdAt' => date('Y-m-d H:i:s', strtotime($this->created_at)),
            'department' => [
                'id' => $this->department['id'],
                'name' => $this->department['department_name'],
                'code' => $this->department['department_code'],
                'workPlace' => $this->department['work_place'],
            ],
        ];
    }
}

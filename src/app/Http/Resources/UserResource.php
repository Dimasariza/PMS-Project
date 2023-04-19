<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "username" => $this->username,
            "fullname" => $this->fullname,
            "email" => $this->email,
            "workPlace" => $this->work_place,
            "status" => $this->status == 1 ? true : false,
            "document" => $this->document,
            "createdAt" => $this->created_at->format('Y-m-d H:i:s'),
            "updatedAt" => $this->updated_at->format('Y-m-d H:i:s'),
            "department" => DepartmentResource::make($this->whenLoaded('department')),
            "title" => UserTitleResource::make($this->whenLoaded('user_title')),
            "token" => $this->token
        ];
    }
}

<?php

namespace App\Http\Resources;

use App\Http\Resources\Department\DepartmentResource;
use App\Http\Resources\UserTitle\UserTitleResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
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
            "document" => $this->when(!is_null($this->document) || $this->document !== "", asset($this->document)),
            "createdAt" => $this->when(!is_null($this->created_at), date('Y-m-d H:i:s', strtotime($this->created_at))),
            "updatedAt" => $this->when(!is_null($this->updated_at), date('Y-m-d H:i:s', strtotime($this->updated_at))),
            "department" => DepartmentResource::make($this->whenLoaded('department')),
            "title" => UserTitleResource::make($this->whenLoaded('user_title')),
            "token" => $this->when(!is_null($this->token), $this->token),
        ];
    }
}

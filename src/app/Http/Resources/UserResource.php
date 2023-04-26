<?php

namespace App\Http\Resources;

use App\Http\Resources\UserTitle\UserTitleResource;
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
            "id" => $this->when(!is_null($this->id), $this->id),
            "username" => $this->when(!is_null($this->username), $this->username),
            "fullname" => $this->when(!is_null($this->fullname), $this->fullname),
            "email" => $this->when(!is_null($this->email), $this->email),
            "workPlace" => $this->when(!is_null($this->work_place), $this->work_place),
            "status" => $this->when(!is_null($this->status), $this->status == 1 ? true : false),
            "document" => $this->when(!is_null($this->document), $this->document),
            "createdAt" => $this->when(!is_null($this->created_at), date('Y-m-d H:i:s', strtotime($this->created_at))),
            "updatedAt" => $this->when(!is_null($this->updated_at), date('Y-m-d H:i:s', strtotime($this->updated_at))),
            "department" => DepartmentResource::make($this->whenLoaded('department')),
            "title" => UserTitleResource::make($this->whenLoaded('user_title')),
            "token" => $this->when(!is_null($this->token), $this->token),
        ];
    }
}

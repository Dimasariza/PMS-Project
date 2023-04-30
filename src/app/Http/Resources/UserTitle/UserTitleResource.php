<?php

namespace App\Http\Resources\UserTitle;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserTitleResource extends JsonResource
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
            "name" => $this->title_name,
            "access" => $this->access,
            "createdAt" => $this->when(!is_null($this->created_at), date('Y-m-d H:i:s', strtotime($this->created_at))),
        ];
    }
}

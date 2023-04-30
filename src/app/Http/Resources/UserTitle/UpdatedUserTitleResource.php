<?php

namespace App\Http\Resources\UserTitle;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UpdatedUserTitleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->when(! is_null($this->id), $this->id),
            'name' => $this->when(! is_null($this->title_name), $this->title_name),
            'access' => $this->when(! is_null($this->access), $this->access),
        ];
    }
}

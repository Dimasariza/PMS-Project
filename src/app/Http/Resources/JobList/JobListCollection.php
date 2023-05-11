<?php

namespace App\Http\Resources\JobList;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class JobListCollection extends ResourceCollection
{
    public static $wrap = null;

    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'results' => $this->collection,
            'links' => [
                'current' => $this->url($this->currentPage()),
                'prev' => $this->previousPageUrl(),
                'next' => $this->nextPageUrl(),
                'first' => $this->url(1),
                'last' => $this->url($this->lastPage()),
                'path' => $this->path(),
            ],
            'metadata' => [
                'currentPage' => $this->currentPage(),
                'lastPage' => $this->lastPage(),
                'maxDataPerPage' => $this->perPage(),
                'totalData' => $this->total(),
            ],
        ];
    }
}

<?php

namespace App\DTO\JobList;

use App\Http\Requests\JobList\CreateJobListRequest;
use App\Http\Requests\JobList\UpdateJobListRequest;

class JobListDTO
{
    public function __construct(

    ) {}

    public static function fromRequest(CreateJobListRequest|UpdateJobListRequest $request): self
    {
        return new self(

        );
    }

    public function build(): array
    {
        return [

        ];
    }
}

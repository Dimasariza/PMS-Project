<?php

namespace App\DTO\JobList;

use App\Http\Requests\JobList\CreateJobListRequest;
use App\Http\Requests\JobList\UpdateJobListRequest;

class JobListDTO
{
    public function __construct(
        public readonly string $departmentId,
        public readonly string $shipId,
        public readonly string $typingSystemId,
        public readonly string $componentName,
        public readonly string $componentCode,
        public readonly string $partName,
        public readonly string $jobType,
        public readonly string $jobName,
        public readonly bool $approvedJob,
        public readonly string $personInCharge,
        public readonly string $status,
        public readonly string $level
    ) {
    }

    public static function fromRequest(CreateJobListRequest|UpdateJobListRequest $request): self
    {
        return new self(
            departmentId: $request->validated('departmentId'),
            shipId: $request->validated('shipId'),
            typingSystemId: $request->validated('typingSystemId'),
            componentName: $request->validated('componentName'),
            componentCode: $request->validated('componentCode'),
            partName: $request->validated('partName'),
            jobType: $request->validated('jobType'),
            jobName: $request->validated('jobName'),
            approvedJob: $request->validated('approvedJob'),
            personInCharge: $request->validated('personInCharge'),
            status: $request->validated('status'),
            level: $request->validated('level')
        );
    }

    public function build(): array
    {
        return [
            'department_id' => $this->departmentId,
            'ship_id' => $this->shipId,
            'typing_system_id' => $this->typingSystemId,
            'component_name' => $this->componentName,
            'component_code' => $this->componentCode,
            'part_name' => $this->partName,
            'job_type' => $this->jobType,
            'job_name' => $this->jobName,
            'approved_job' => $this->approvedJob,
            'person_in_charge' => $this->personInCharge,
            'status' => $this->status,
            'level' => $this->level,
        ];
    }
}

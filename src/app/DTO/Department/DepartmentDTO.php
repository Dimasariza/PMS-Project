<?php

namespace App\DTO\Department;

use App\Http\Requests\Department\CreateDepartmentRequest;
use App\Http\Requests\Department\UpdateDepartmentRequest;

class DepartmentDTO
{
    public function __construct(
        readonly public string $departmentName,
        readonly public string $departmentCode,
        readonly public string $workPlace,
    ) {
    }

    public static function fromRequest(CreateDepartmentRequest|UpdateDepartmentRequest $request): DepartmentDTO
    {
        return new self(
            departmentName: $request->validated('departmentName'),
            departmentCode: $request->validated('departmentCode'),
            workPlace: $request->validated('workPlace'),
        );
    }

    public function build(): array
    {
        return [
            'department_name' => $this->departmentName,
            'department_code' => $this->departmentCode,
            'work_place' => $this->workPlace,
        ];
    }
}

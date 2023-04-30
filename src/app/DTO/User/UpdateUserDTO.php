<?php

namespace App\DTO\User;

use App\Http\Requests\User\UpdateUserRequest;

class UpdateUserDTO
{
    public function __construct(
        readonly public string $fullname,
        readonly public string $departmentId,
        readonly public string $userTitleId,
        readonly public string $workPlace,
        readonly public bool $status,
        readonly public ?string $document,
    ) {
    }

    public static function fromRequest(UpdateUserRequest $request, string $documentName = null): UpdateUserDTO
    {
        return new self(
            fullname: $request->validated('fullname'),
            departmentId: $request->validated('departmentId'),
            userTitleId: $request->validated('userTitleId'),
            workPlace: $request->validated('workPlace'),
            status: $request->validated('status'),
            document: $documentName
        );
    }

    public function build(): array
    {
        $arr = [
            'fullname' => $this->fullname,
            'department_id' => $this->departmentId,
            'user_title_id' => $this->userTitleId,
            'work_place' => $this->workPlace,
            'status' => $this->status,
        ];

        if (! $this->document) {
            return $arr;
        }

        $arr['document'] = $this->document;

        return $arr;
    }
}

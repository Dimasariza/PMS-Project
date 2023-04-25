<?php

namespace App\DTO\User;

use App\Http\Requests\User\UpdateUserRequest;

class UpdateUserDTO
{
    public function __construct(
        readonly public string $username,
        readonly public string $fullname,
        readonly public string $departmentId,
        readonly public string $email,
        readonly public string $userTitleId,
        readonly public string $workPlace,
        readonly public boolean $status,
        readonly public mixed $document,
    ) {}

    public static function fromRequest(UpdateUserRequest $request): UpdateUserDTO
    {
        return new self(
            username: $request->validated('username'),
            fullname: $request->validated('fullname'),
            departmentId: $request->validated('departmentId'),
            email: $request->validated('email'),
            userTitleId: $request->validated('userTitleId'),
            workPlace: $request->validated('workPlace'),
            status: $request->validated('status'),
            document: $request->validated('document') ?? null
        );
    }

    public function build(): array
    {
        $arr = [
            'username' => $this->username,
            'fullname' => $this->fullname,
            'department_id' => $this->departmentId,
            'email' => $this->email,
            'user_title_id' => $this->userTitleId,
            'work_place' => $this->workPlace,
            'status' => $this->status,
        ];

        if(!$this->document) {
            return $arr;
        }

        $arr['document'] = $this->document;

        return $arr;
    }
}

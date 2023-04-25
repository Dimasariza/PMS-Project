<?php

namespace App\DTO\User;

use App\Http\Requests\User\InsertUserRequest;

class InsertUserDTO
{
    public function __construct(
        readonly public string $username,
        readonly public string $fullname,
        readonly public string $departmentId,
        readonly public string $email,
        readonly public string $password,
        readonly public string $userTitleId,
        readonly public string $workPlace,
        readonly public boolean $status,
        readonly public mixed $document,
    ) {}

    public static function fromRequest(InsertUserRequest $request): InsertUserDTO
    {
        return new self(
            username: $request->validated('username'),
            fullname: $request->validated('fullname'),
            departmentId: $request->validated('departmentId'),
            email: $request->validated('email'),
            password: $request->validated('password'),
            userTitleId: $request->validated('userTitleId'),
            workPlace: $request->validated('workPlace'),
            status: $request->validated('status'),
            document: $request->validated('document')
        );
    }

    public function build(): array
    {
        return [
            'username' => $this->username,
            'fullname' => $this->fullname,
            'department_id' => $this->departmentId,
            'email' => $this->email,
            'password' => $this->password,
            'user_title_id' => $this->userTitleId,
            'work_place' => $this->workPlace,
            'status' => $this->status,
            'document' => $this->document,
        ];
    }
}

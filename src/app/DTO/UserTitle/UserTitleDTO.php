<?php

namespace App\DTO\UserTitle;

use App\Http\Requests\UserTitle\InsertUserTitleRequest;
use App\Http\Requests\UserTitle\UpdateUserTitleRequest;

class UserTitleDTO
{
    public function __construct(
        readonly public string $titleName,
        readonly public string $access,
    ) {}

    public static function fromRequest(InsertUserTitleRequest | UpdateUserTitleRequest $request): UserTitleDTO
    {
        return new self(
            titleName: $request->validated('titleName'),
            access: $request->validated('titleAccess'),
        );
    }
}

<?php

namespace App\DTO\UserTitle;

use App\Http\Requests\UserTitle\InsertUserTitleRequest;
use App\Http\Requests\UserTitle\UpdateUserTitleRequest;

class UserTitleDTO
{
    public function __construct(
        readonly public string $titleName,
        readonly public array $access,
    ) {
    }

    public static function fromRequest(InsertUserTitleRequest|UpdateUserTitleRequest $request): UserTitleDTO
    {
        return new self(
            titleName: $request->validated('titleName'),
            access: match (gettype($request->validated('titleAccess'))) {
                'string' => json_decode($request->validated('titleAccess'), true),
                'array', 'object' => $request->validated('titleAccess'),
            },
        );
    }

    public function build(): array
    {
        return [
            'title_name' => $this->titleName,
            'access' => $this->access,
        ];
    }
}

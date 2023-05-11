<?php

namespace App\DTO\TypingSystem;

use App\Http\Requests\TypingSystem\CreateTypingSystemRequest;
use App\Http\Requests\TypingSystem\UpdateTypingSystemRequest;

class TypingSystemDTO
{
    public function __construct(

    ) {
    }

    public static function fromRequest(CreateTypingSystemRequest|UpdateTypingSystemRequest $request): self
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

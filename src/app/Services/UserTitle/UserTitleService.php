<?php

namespace App\Services\UserTitle;

use App\Models\UserTitle;
use Illuminate\Database\Eloquent\Collection;

interface UserTitleService
{
    public function getAllUserTitle(): Collection;

    public function store(array $request): UserTitle;

    public function update($id, array $request): ?bool;
}

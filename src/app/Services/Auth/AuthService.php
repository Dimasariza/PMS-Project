<?php

namespace App\Services\Auth;

use App\Models\User;

interface AuthService
{
    /**
     * handle authentication login
     *
     * @return ?User
     */
    public function login(array $credentials): ?User;

    /**
     * handle authentication logout
     */
    public function logout(string $token): bool;
}

<?php

namespace App\Services\Auth;

use App\Models\User;

interface AuthService
{
    /**
     * handle authentication login
     *
     * @param  array $credentials
     * @return ?User
     */
    public function login(array $credentials): ?User;

    /**
     * handle authentication logout
     *
     * @param  string $token
     * @return bool
     */
    public function logout(string $token): bool;
}

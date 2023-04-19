<?php

namespace App\Services\Auth;

interface AuthService
{
    /**
     * handle authentication login
     *
     * @param  array $credentials
     * @return array
     */
    public function login(array $credentials): ?array;

    /**
     * handle authentication logout
     *
     * @param  string $token
     * @return bool
     */
    public function logout(string $token): bool;
}

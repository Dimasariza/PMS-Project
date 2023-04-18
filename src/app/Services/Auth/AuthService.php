<?php

namespace App\Services\Auth;

interface AuthService
{
    public function login(array $credentials): ?array;
    public function logout(string $token): bool;
}

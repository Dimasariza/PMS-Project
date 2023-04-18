<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthServiceImpl implements AuthService
{
    public function login(array $credentials): ?array
    {
        if(!Auth::attempt([ 'email' => $credentials['email'], 'password' => $credentials['password'] ])) {
            return null;
        }

        $user = Auth::user();
        $user['token'] = $user->createToken('auth_token')->plainTextToken;

        return $user;
    }

    public function logout(string $token): bool
    {
        $token = PersonalAccessToken::findToken($token);
        $isDeleted = $token->delete();

        if($isDeleted) {
            return true;
        }

        return false;
    }
}

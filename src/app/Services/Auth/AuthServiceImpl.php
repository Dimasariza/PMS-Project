<?php

namespace App\Services\Auth;

use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthServiceImpl implements AuthService
{
    /**
     * return the authenticated user with the auth token
     *
     * @param  array $credentials
     * @return array
     */
    public function login(array $credentials): ?array
    {
        if(!Auth::attempt($credentials)) {
            return null;
        }

        $user = Auth::user();
        $user['token'] = $user->createToken('auth_token')->plainTextToken;

        return $user->toArray();
    }

    /**
     * check if token exists and delete it
     *
     * @param  string $token
     * @return bool
     */
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

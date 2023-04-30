<?php

namespace App\Services\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthServiceImpl implements AuthService
{
    /**
     * return the authenticated user with the auth token
     *
     * @return ?User
     */
    public function login(array $credentials): ?User
    {
        if (! Auth::attempt($credentials)) {
            return null;
        }

        $user = Auth::user()->load(['department', 'user_title']);
        $user['token'] = $user->createToken('auth_token', [$user->user_title->title_name])->plainTextToken;

        return $user;
    }

    /**
     * check if token exists and delete it
     */
    public function logout(string $token): bool
    {
        $currentUser = PersonalAccessToken::findToken($token);
        if (is_null($currentUser)) {
            return false;
        }

        $isDeleted = $currentUser->delete();

        if ($isDeleted) {
            return true;
        }

        return false;
    }
}

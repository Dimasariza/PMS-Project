<?php

namespace App\Providers;

use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryImpl;
use App\Repositories\UserTitle\UserTitleRepository;
use App\Repositories\UserTitle\UserTitleRepositoryImpl;
use App\Services\Auth\AuthService;
use App\Services\Auth\AuthServiceImpl;
use App\Services\User\UserService;
use App\Services\User\UserServiceImpl;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $instances = [
            [AuthService::class, AuthServiceImpl::class],
            [UserTitleRepository::class, UserTitleRepositoryImpl::class],
            [UserRepository::class, UserRepositoryImpl::class],
            [UserService::class, UserServiceImpl::class],
        ];

        foreach ($instances as $instance) {
            $this->app->bind($instance[0], $instance[1]);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}

<?php

namespace App\Providers;

use App\Repositories\Department\DepartmentRepository;
use App\Repositories\Department\DepartmentRepositoryImpl;
use App\Repositories\Ship\ShipRepository;
use App\Repositories\Ship\ShipRepositoryImpl;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryImpl;
use App\Repositories\UserTitle\UserTitleRepository;
use App\Repositories\UserTitle\UserTitleRepositoryImpl;
use App\Services\Auth\AuthService;
use App\Services\Auth\AuthServiceImpl;
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
            [DepartmentRepository::class, DepartmentRepositoryImpl::class],
            [ShipRepository::class, ShipRepositoryImpl::class],
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

<?php

namespace Tests;

use App\Models\User;
use App\Enums\WorkPlace;
use App\Models\UserTitle;
use App\Models\Department;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Create the user, user title, and department for test
     *
     * @return void
     */
    protected function createStarter(): void
    {
        Artisan::call('migrate');

        User::create([
            'username' => 'admin123',
            'fullname' => 'Super Admin',
            'department_id' => 1,
            'email' => 'admin@gmail.com',
            'password' => 'admin1234',
            'user_title_id' => 1,
            'work_place' => WorkPlace::Office,
            'status' => true,
            'document' => 'somedocs.pdf',
        ]);


        UserTitle::create([
            'title_name' => 'Admin',
            'access' => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ],
            'created_at' => now(),
        ]);

        Department::create([
            'department_name' => 'Department 1',
            'department_code' => 'D001',
            'work_place' => WorkPlace::Ship,
        ]);
    }
}

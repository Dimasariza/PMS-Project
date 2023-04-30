<?php

namespace Tests;

use App\Enums\WorkPlace;
use App\Models\Department;
use App\Models\User;
use App\Models\UserTitle;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Create the user, user title, and department for test
     */
    protected function createStarter(): void
    {
        Artisan::call('migrate:fresh');

        UserTitle::create([
            'title_name' => 'Admin',
            'access' => [
                'shipList' => true,
                'shipDetails' => true,
                'jobList' => true,
                'dataSheet' => true,
                'stock' => true,
                'users' => true,
                'department' => true,
                'inbox' => true,
            ],
            'created_at' => now(),
        ]);

        Department::create([
            'department_name' => 'Department 1',
            'department_code' => 'D001',
            'work_place' => WorkPlace::Ship,
        ]);

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
    }

    protected function createNonAdminUser(): void
    {
        UserTitle::create([
            'title_name' => 'View Only',
            'access' => [
                'shipList' => false,
                'shipDetails' => false,
                'jobList' => false,
                'dataSheet' => false,
                'stock' => false,
                'users' => false,
                'department' => false,
                'inbox' => false,
            ],
            'created_at' => now(),
        ]);

        User::create([
            'username' => 'normal123',
            'fullname' => 'Normal User',
            'department_id' => 1,
            'email' => 'normal@gmail.com',
            'password' => 'normal1234',
            'user_title_id' => 2,
            'work_place' => WorkPlace::Ship,
            'status' => true,
            'document' => 'somedocs.pdf',
        ]);
    }

    protected function login(): string
    {
        $response = $this->postJson(route('auth.login'), [
            'username' => 'admin123',
            'password' => 'admin1234',
        ]);

        $token = $response['data']['token'];

        return $token;
    }
}

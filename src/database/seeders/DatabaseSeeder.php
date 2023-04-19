<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Department;
use App\Models\User;
use App\Models\UserTitle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Department::factory(5)->create();
        UserTitle::factory(5)->create();
        User::factory(15)->create();

        User::query()->create([
            'username' => 'superadmin',
            'fullname' => 'LeBron Juara NBA 2K23',
            'department_id' => fake()->randomElement(Department::pluck('id')),
            'email' => 'admin@gmail.com',
            'password' => 'user1234',
            'user_title_id' => fake()->randomElement(UserTitle::pluck('id')),
            'work_place' => 'office',
            'status' => true,
            'document' => "some_document.pdf",
        ]);
    }
}

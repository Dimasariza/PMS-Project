<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Department;
use App\Models\User;
use App\Models\UserTitle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->generateUserTitle();

        Department::factory(5)->create();
        User::factory(15)->create();

        User::query()->create([
            'username' => 'superadmin',
            'fullname' => 'LeBron Juara NBA 2K23',
            'department_id' => fake()->randomElement(Department::pluck('id')),
            'email' => 'admin@gmail.com',
            'password' => 'user1234',
            'user_title_id' => UserTitle::where('title_name', 'Admin')->first()->id,
            'work_place' => 'office',
            'status' => true,
            'document' => "some_document.pdf",
        ]);
    }

    private function generateUserTitle(): void
    {
        $normal_roles = [
            "shipList" => false,
            "shipDetails" => false,
            "jobList" => true,
            "dataSheet" => true,
            "stock" => false,
            "users" => true,
            "department" => true,
            "inbox" => true
        ];

        $super_roles = [
            "shipList" => true,
            "shipDetails" => true,
            "jobList" => true,
            "dataSheet" => true,
            "stock" => true,
            "users" => true,
            "department" => true,
            "inbox" => true,
        ];

        $title_names = ['Captain', 'Chief Engineer', 'Chief Officer', 'Admin', 'Second Engineer'];

        foreach ($title_names as $title) {
            DB::table('user_titles')->insert([
                'title_name' => $title,
                'access' => $title == 'Captain' || $title == 'Admin' ? json_encode($super_roles) : json_encode($normal_roles),
            ]);
        }
    }
}

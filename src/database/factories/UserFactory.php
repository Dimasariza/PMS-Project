<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\UserTitle;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => fake()->unique()->userName(),
            'fullname' => fake()->name(),
            'department_id' => $this->faker->randomElement(Department::pluck('id')),
            'email' => fake()->unique()->safeEmail(),
            'password' => 'user1234',
            'user_title_id' => $this->faker->randomElement(UserTitle::pluck('id')),
            'work_place' => fake()->randomElement(['ship', 'office']),
            'status' => fake()->randomElement([true, false]),
            'document' => Str::random(20),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}

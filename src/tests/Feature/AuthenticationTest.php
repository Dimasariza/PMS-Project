<?php

namespace Tests\Feature;

use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    public function test_login_bad_credentials()
    {
        $this->postJson(route('auth.login'), [
            'username' => 'bad_username',
            'password' => 'supabase'
        ])
        ->assertStatus(400)
        ->assertSimilarJson([
            'statusCode' => 400,
            'message' => 'Bad credentials',
        ]);
    }

    public function test_login_success()
    {
        $this->postJson(route('auth.login'), [
            'username' => 'admin123',
            'password' => 'admin1234'
        ])
        ->assertStatus(200)
        ->assertJson(fn (AssertableJson $json) =>
            $json
            ->where('statusCode', 200)
            ->where('message', 'Authenticated')
            ->where('data.id', 1)
            ->where('data.username', 'admin123')
            ->where('data.fullname', 'Super Admin')
            ->missing('data.password')
            ->has("data.token")
            ->etc()
        );
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->createStarter();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }
}

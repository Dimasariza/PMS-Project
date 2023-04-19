<?php

namespace Tests\Feature\Auth;

use App\Services\Auth\AuthService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthServiceTest extends TestCase
{
    protected $service;

    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }

    public function test_unknown_credentials()
    {
        $request = ["username" => "asep", "password" => "teuing"];
        $this->service->login($request);
    }

    public function test_auth_success()
    {

    }

    public function test_login_success()
    {

    }

    public function test_logout_unknown_token()
    {

    }

    public function test_logout_success()
    {

    }

    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

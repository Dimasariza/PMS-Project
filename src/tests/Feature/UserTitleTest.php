<?php

namespace Tests\Feature;

use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class UserTitleTest extends TestCase
{
    private string $authToken;
    private string $nonAdminToken;

    protected function setUp(): void
    {
        parent::setUp();
        $this->createStarter();
        $this->createNonAdminUser();
        $this->authToken = $this->login();
        $this->nonAdminToken = $this->loginNonAdmin();
    }

    public function test_different_role_should_not_be_authorized()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "Captain",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->nonAdminToken}"])
        ->assertStatus(401)
        ->assertExactJson([
            'statusCode' => 401,
            'message' => 'Unauthorized'
        ]);
    }

    public function test_get_all_user_titles()
    {
        $this->withHeader("Authorization", "Bearer {$this->authToken}")
        ->get(route('user_title.index'))
        ->assertStatus(200);
    }

    public function test_create_new_user_title_success()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "Captain",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(201)
        ->assertJson(fn (AssertableJson $json) =>
            $json
            ->where('message', 'Created')
            ->where('statusCode', 201)
            ->where('data.access', [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ])
            ->where('data.name', 'Captain')
            ->etc()
        );
    }

    public function test_update_user_titles()
    {
        $response = $this->postJson(route('user_title.store'), [
            "titleName" =>  "General Manager",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"]);

        $id = $response['data']['id'];

        $this->putJson(route('user_title.update', ['user_title' => $id]), [
            "titleName" =>  "Only General",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(200)
        ->assertJson(fn (AssertableJson $json) =>
            $json
            ->where('message', 'Updated')
            ->where('statusCode', 200)
            ->where('data.access', [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ])
            ->where('data.name', 'Only General')
            ->etc()
        );
    }

    public function test_update_unique_user_titles()
    {
        $response = $this->postJson(route('user_title.store'), [
            "titleName" =>  "General Manager",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"]);

        $id = $response['data']['id'];

        $this->putJson(route('user_title.update', ['user_title' => $id]), [
            "titleName" =>  "Only General",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"]);

        $this->putJson(route('user_title.update', ['user_title' => $id]), [
            "titleName" =>  "Admin",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleName' => 'The title name has already been taken.',
            ]
        ]);
    }

    public function test_insert_unique_constraint_title_name()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "Admin",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleName' => 'The title name has already been taken.',
            ]
        ]);
    }

    public function test_unknown_user_title_id_param()
    {
        $this->putJson(route('user_title.update', ['user_title' => 10000]), [
            "titleName" =>  "Chief Engineer",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(400)
        ->assertExactJson([
            'statusCode' => 400,
            'message' => 'Unknown user title'
        ]);
    }

    public function test_title_name_is_required()
    {
        $this->postJson(route('user_title.store'), [
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleName' => 'The title name field is required.',
            ]
        ]);
    }

    public function test_title_access_invalid_json_structure()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" => "Masterchef",
            "titleAccess" => "some title access"
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleAccess' => 'Invalid json structure',
            ]
        ]);
    }

    public function test_title_access_less_than_required_len()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" => "Masterchef",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleAccess' => 'Total length access title given is not the same, expected 8, got 2',
            ]
        ]);
    }

    public function test_title_access_unknown_title()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "SRE Tooler",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "job_list" => false,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleAccess' => "Unknown access type 'job_list'",
            ]
        ]);
    }

    public function test_title_access_wrong_types_value()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "SRE Tooler",
            "titleAccess" => [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => false,
                "dataSheet" => true,
                "stock" => "true",
                "users" => true,
                "department" => true,
                "inbox" => true,
            ]
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'titleAccess' => "Access type value must be boolean, got string 'true'",
            ]
        ]);
    }

    public function test_title_access_input_with_json_stringify()
    {
        $this->postJson(route('user_title.store'), [
            "titleName" =>  "SRE Tooler",
            "titleAccess" => "{\"shipList\": true,\"shipDetails\": true,\"jobList\": true,\"dataSheet\": true,\"stock\": true,\"users\": true,\"department\": true,\"inbox\": true}"
        ], ["Authorization" => "Bearer {$this->authToken}"])
        ->assertStatus(201)
        ->assertJson(fn (AssertableJson $json) =>
            $json
            ->where('message', 'Created')
            ->where('statusCode', 201)
            ->where('data.access', [
                "shipList" => true,
                "shipDetails" => true,
                "jobList" => true,
                "dataSheet" => true,
                "stock" => true,
                "users" => true,
                "department" => true,
                "inbox" => true,
            ])
            ->where('data.name', 'SRE Tooler')
            ->etc()
        );
    }

    private function login(): string
    {
        $response = $this->postJson(route('auth.login'), [
            'username' => 'admin123',
            'password' => 'admin1234'
        ]);

        $token = $response['data']['token'];

        return $token;
    }

    private function loginNonAdmin(): string
    {
        $response = $this->postJson(route('auth.login'), [
            'username' => 'normal123',
            'password' => 'normal1234'
        ]);

        $token = $response['data']['token'];

        return $token;
    }
}

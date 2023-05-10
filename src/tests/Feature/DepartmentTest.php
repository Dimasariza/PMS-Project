<?php

namespace Tests\Feature;

use App\Enums\WorkPlace;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class DepartmentTest extends TestCase
{
    private string $authToken;

    protected function setUp(): void
    {
        parent::setUp();
        $this->createStarter();
        $this->authToken = $this->login();
    }

    public function test_get_all()
    {
        $this->withHeader('Authorization', "Bearer {$this->authToken}")
            ->get(route('department.index'))
            ->assertStatus(200)
            ->assertJsonIsArray('data');
    }

    public function test_create_department()
    {
        $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"])
            ->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) => $json
                ->where('message', 'Created')
                ->where('statusCode', 201)
                ->where('data.name', 'Some Deps')
                ->where('data.code', 'SB000')
                ->where('data.workPlace', 'ship')
                ->etc()
            );
    }

    public function test_create_department_unique_code_department_must_fail()
    {
        $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertSimilarJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            'errors' => [
                'departmentCode' => 'The department code has already been taken.',
            ]
        ]);
    }

    public function test_get_one_department()
    {
        $in = $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $id = $in->json('data.id');

        $this->getJson(
            route('department.show', ['department' => $id]),
            ['Authorization' => "Bearer {$this->authToken}"]
        )->assertStatus(200)
        ->assertJson(fn (AssertableJson $json) => $json
                ->where('message', 'Success')
                ->where('statusCode', 200)
                ->where('data.id', $id)
                ->where('data.name', 'Some Deps')
                ->where('data.code', 'SB000')
                ->where('data.workPlace', 'ship')
                ->etc()
        );
    }

    public function test_update_department_same_code()
    {
        $in = $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $id = $in->json('data.id');

        $this->putJson(route('department.update', ['department' => $id]), [
            'departmentName' => 'Some Deps #2',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"])
        ->assertStatus(200)
        ->assertJson(fn (AssertableJson $json) => $json
                ->where('message', 'Updated')
                ->where('statusCode', 200)
                ->where('data.id', $id)
                ->where('data.name', 'Some Deps #2')
                ->where('data.code', 'SB000')
                ->where('data.workPlace', 'ship')
                ->etc()
        );
    }

    public function test_update_department_different_code()
    {
        $in = $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $id = $in->json('data.id');

        $this->putJson(route('department.update', ['department' => $id]), [
            'departmentName' => 'Some Deps #2',
            'departmentCode' => 'SB001',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"])
        ->assertStatus(200)
        ->assertJson(fn (AssertableJson $json) => $json
                ->where('message', 'Updated')
                ->where('statusCode', 200)
                ->where('data.id', $id)
                ->where('data.name', 'Some Deps #2')
                ->where('data.code', 'SB001')
                ->where('data.workPlace', 'ship')
                ->etc()
        );
    }

    public function test_update_department_different_code_but_unique_constrained()
    {
        $in = $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps For Another',
            'departmentCode' => 'SB001',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $id = $in->json('data.id');

        $this->putJson(route('department.update', ['department' => $id]), [
            'departmentName' => 'Some Deps #2',
            'departmentCode' => 'SB001',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"])
        ->assertStatus(422)
        ->assertExactJson([
            'statusCode' => 422,
            'message' => 'Bad input',
            "errors" => [
                "departmentCode" => "The department code has already been taken."
            ],
        ]);
    }

    public function test_delete_department()
    {
        $in = $this->postJson(route('department.store'), [
            'departmentName' => 'Some Deps',
            'departmentCode' => 'SB000',
            'workPlace' => WorkPlace::Ship,
        ], ['Authorization' => "Bearer {$this->authToken}"]);

        $id = $in->json('data.id');

        $this->deleteJson(
            uri: route('department.destroy', ['department' => $id]),
            headers: ['Authorization' => "Bearer {$this->authToken}"]
        )->assertStatus(200)
        ->assertExactJson([
            'message' => 'Deleted',
            'statusCode' => 200
        ]);
    }
}

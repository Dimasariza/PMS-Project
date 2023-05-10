<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UserTest extends TestCase
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
            ->get(route('user.index'))
            ->assertStatus(200)
            ->assertJsonIsArray('data');
    }

    public function test_create_user_with_document()
    {
        Storage::fake('public');
        $response = $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.store'), [
            'username' => 'someusername',
            'fullname' => 'Some Username',
            'departmentId' => 1,
            'email' => 'someemail@example.com',
            'password' => 'somepassword',
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->image('docs.jpg', 400, 400),
        ]);

        Storage::disk('public')->assertExists("users/{$this->getFilename($response->json('data.document'))}");

        $response->assertStatus(200)
            ->assertJsonIsObject('data')
            ->assertJsonIsObject('data.department')
            ->assertJsonIsObject('data.userTitle');
    }

    public function test_get_one_user()
    {
        $this->withHeader('Authorization', "Bearer {$this->authToken}")
            ->getJson(route('user.show', ['user' => 1]))
            ->assertStatus(200)
            ->assertJsonIsObject('data')
            ->assertJsonIsObject('data.department')
            ->assertJsonIsObject('data.userTitle');
    }

    public function test_update_user()
    {
        Storage::fake('users');

        $respId = $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.store'), [
            'username' => 'someusername',
            'fullname' => 'Some Username',
            'departmentId' => 1,
            'email' => 'someemail@example.com',
            'password' => 'somepassword',
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->image('docs.jpg', 400, 400),
        ])->json('data.id');

        $resp = $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.update', ['user' => $respId]), [
            'fullname' => 'Another Some Username',
            'departmentId' => 1,
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->image('supa.jpg', 400, 400),
        ]);

        Storage::disk('public')->assertExists("users/{$this->getFilename($resp->json('data.document'))}");

        $resp->assertStatus(200)
            ->assertJsonIsObject('data')
            ->assertJsonIsObject('data.department')
            ->assertJsonIsObject('data.userTitle');
    }

    public function test_create_user_big_document_img()
    {
        $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.store'), [
            'username' => 'someusername',
            'fullname' => 'Some Username',
            'departmentId' => 1,
            'email' => 'someemail@example.com',
            'password' => 'somepassword',
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->image('img.jpeg', 500, 500)->size(1025),
        ])
            ->assertStatus(422)
            ->assertSimilarJson([
                'statusCode' => 422,
                'message' => 'Bad input',
                'errors' => [
                    'document' => 'The document field must not be greater than 1024 kilobytes.',
                ],
            ]);
    }

    public function test_create_user_wrong_extension_img()
    {
        $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.store'), [
            'username' => 'someusername',
            'fullname' => 'Some Username',
            'departmentId' => 1,
            'email' => 'someemail@example.com',
            'password' => 'somepassword',
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->create('img.zip', 1000),
        ])
            ->assertStatus(422)
            ->assertSimilarJson([
                'statusCode' => 422,
                'message' => 'Bad input',
                'errors' => [
                    'document' => 'The document field must be an image.',
                ],
            ]);
    }

    public function test_update_user_without_changing_document()
    {
        Storage::fake('users');

        $in = $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.store'), [
            'username' => 'someusername',
            'fullname' => 'Some Username',
            'departmentId' => 1,
            'email' => 'someemail@example.com',
            'password' => 'somepassword',
            'userTitleId' => 1,
            'workPlace' => 'office',
            'status' => true,
            'document' => UploadedFile::fake()->image('docs.jpg', 400, 400),
        ]);

        $id = $in->json('data.id');
        $imgBefore = $in->json('data.document');

        $resp = $this->withHeader('Authorization', "Bearer {$this->authToken}")->post(route('user.update', ['user' => $id]), [
            'fullname' => 'Another Some Username',
            'departmentId' => 1,
            'userTitleId' => 1,
            'workPlace' => 'ship',
            'status' => true,
        ]);

        Storage::disk('public')->assertExists("users/{$this->getFilename($resp->json('data.document'))}");

        $resp->assertStatus(200)
            ->assertJsonIsObject('data')
            ->assertJsonIsObject('data.department')
            ->assertJsonIsObject('data.userTitle');

        $this->assertEquals($imgBefore, $resp->json('data.document'));
    }

    private function getFilename(string $name): string
    {
        $exploded = explode('/', $name);
        $filename = $exploded[array_key_last($exploded)];

        return $filename;
    }
}

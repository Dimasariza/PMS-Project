<?php

namespace App\Http\Controllers;

use App\Http\Requests\TypingSystem\CreateTypingSystemRequest;
use App\Http\Requests\TypingSystem\UpdateTypingSystemRequest;
use App\Http\Resources\TypingSystem\TypingSystemCollection;
use App\Http\Resources\TypingSystem\TypingSystemCreatedResource;
use App\Http\Resources\TypingSystem\TypingSystemResource;
use App\Http\Resources\TypingSystem\TypingSystemUpdatedResource;
use App\Models\TypingSystem;
use App\Repositories\TypingSystem\TypingSystemRepository;
use App\Traits\APIResponse;
use Illuminate\Http\Response;

/**
 * @group TypingSystem
 *
 * APIs for TypingSystem
 */
class TypingSystemController extends Controller
{
    use APIResponse;

    public function __construct(
        protected TypingSystemRepository $repository
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->successResponse(
            new TypingSystemCollection(
                $this->repository->getAll(),
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateTypingSystemRequest $request)
    {
        $result = $this->repository->create(
            CreateTypingSystemDTO::fromRequest($request),
        );

        return $this->successResponse(
            TypingSystemCreatedResource::make($result),
            'Created',
            Response::HTTP_CREATED,
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        return $this->successResponse(
            TypingSystemResource::make($this->repository->show($id)),
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string|int $id, UpdateTypingSystemRequest $request)
    {
        $result = $this->repository->update(
            $id,
            UpdateTypingSystemDTO::fromRequest($request)
        );

        return $this->successResponse(
            TypingSystemUpdatedResource::make($result),
            'Updated',
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        $this->repository->delete($id);

        return $this->successResponse(null, 'Deleted');
    }
}

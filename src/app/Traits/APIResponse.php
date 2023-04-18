<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait APIResponse
{
    /**
    * Create json api response for success case
    *
    * @param  mixed  $data
    * @param  string $message
    * @param  int    $statusCode
    * @return Illuminate\Http\JsonResponse
    */
    protected function successResponse($data = null, string $message = "Success", int $statusCode = 200): JsonResponse
    {
        if($data) {
            return response()->json(["statusCode" => $statusCode, "message" => $message, "data" => $data], $statusCode);
        }

        return response()->json(["statusCode" => $statusCode, "message" => $message], $statusCode);
    }


    /**
    * Create json api response for failed case
    *
    * @param  string $message
    * @param  int    $statusCode
    * @param  mixed  $data
    * @return Illuminate\Http\JsonResponse
    */
    protected function failResponse(string $message = "Internal Server Error", int $statusCode = 500, $data = null): JsonResponse
    {
        if($data) {
            return response()->json(["statusCode" => $statusCode, "message" => $message, "data" => $data], $statusCode);
        }

        return response()->json(["statusCode" => $statusCode, "message" => $message], $statusCode);
    }
}

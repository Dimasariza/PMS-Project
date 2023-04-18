<?php

namespace App\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

trait FailedValidation
{
    /**
    * Overriding the event validator for custom error response
    *
    * @param  Validator $validator
    * @throws Illuminate\Http\Exceptions\HttpResponseException
    *
    */
    public function failedValidation(Validator $validator)
    {
        $errFields = array_keys($validator->failed());
        $errors = [];

        $response = [
            'statusCode' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'message' => 'Bad input',
        ];

        for ($i=0; $i < count($errFields); $i++) {
            if( $e = $validator->errors()->get($errFields[$i]) ) {
                $errors[$errFields[$i]] = $e[0];
            }
        }

        throw new HttpResponseException(response()->json(array_merge($response, ["errors" => $errors]), Response::HTTP_UNPROCESSABLE_ENTITY));
   }
}

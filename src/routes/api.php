<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserTitleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::prefix('/v1')->group(function() {
    Route::prefix('/auth')->controller(AuthenticationController::class)->group(function() {
        Route::post('/login', 'login');
        Route::post('/logout', 'logout');
    });

    Route::middleware(['auth.api', 'title:Admin'])
    ->apiResource('user_title', UserTitleController::class)
    ->only(['index', 'store', 'update']);
});

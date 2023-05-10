<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ShipController;
use App\Http\Controllers\UserController;
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

Route::prefix('/v1')->group(function () {
    Route::prefix('/auth')->controller(AuthenticationController::class)->group(function () {
        Route::post('/login', 'login')->name('auth.login');
        Route::post('/logout', 'logout')->name('auth.logout');
    });

    Route::middleware(['auth.api', 'title:Admin'])
        ->apiResource('user_title', UserTitleController::class)
        ->only(['index', 'store', 'update']);

    Route::middleware(['auth.api', 'title:Admin'])
        ->apiResource('user', UserController::class)
        ->only(['index', 'store', 'show']);
    Route::middleware(['auth.api', 'title:Admin'])->post('user/{user}/update', [UserController::class, 'update'])->name('user.update');

    Route::middleware(['auth.api', 'title:Admin'])
        ->apiResource('department', DepartmentController::class);

    Route::middleware(['auth.api', 'title:Admin'])
        ->prefix('/ship')
        ->controller(ShipController::class)
        ->group(function () {
            Route::get('/', 'index')->name('ship.index');
            Route::post('/', 'store')->name('ship.store');
            Route::get('/{id}', 'show')->name('ship.show');
            Route::post('/{id}/update', 'update')->name('ship.update');
            Route::delete('/{id}', 'destroy')->name('ship.delete');
        });
});

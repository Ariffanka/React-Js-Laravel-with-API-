<?php

use App\Http\Controllers\TestingController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', [TestingController::class, 'index']);
Route::get('/testing', [TestingController::class, 'test']);
Route::get('/test/{id}', [TestingController::class, 'show']);
Route::get('/test/create', [TestingController::class, 'create']);
Route::post('/test/store', [TestingController::class, 'store']);
Route::get('/test/edit/{id}', [TestingController::class, 'edit']);
Route::put('/test/update/{id}', [TestingController::class, 'update']);
Route::get('/test/destroy/{id}', [TestingController::class, 'destroy']);

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function (){
    include('api/auth.php');
});

Route::middleware('auth:sanctum')->get('getUser', function (){
    return auth()->user();
});

Route::middleware('auth:sanctum')->group(function (){
    Route::resource('users', \App\Http\Controllers\UserController::class);
});

Route::resource('tasks', \App\Http\Controllers\Todo\TaskController::class);
Route::resource('projects', \App\Http\Controllers\Todo\ProjectController::class);

Route::post('sendMessage', [\App\Http\Controllers\User\MessageController::class, 'sendMessage']);

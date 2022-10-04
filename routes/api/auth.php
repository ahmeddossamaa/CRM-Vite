<?php
Route::middleware('api')->group(function (){
    Route::get('get_user_by_token', [\App\Http\Controllers\User\AuthController::class, 'getUserByToken']);
});
Route::post('login', [\App\Http\Controllers\User\AuthController::class, 'login'])->name('login');
Route::post('register', [\App\Http\Controllers\User\AuthController::class, 'register']);
Route::post('logout', [\App\Http\Controllers\User\AuthController::class, 'logout']);

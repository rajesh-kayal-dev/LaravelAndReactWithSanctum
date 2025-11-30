<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::Post('/create-new-post', [PostController::class, 'createNewPost']);
Route::get('/get-all-post', [PostController::class, 'getAllPosts']);
Route::post('/delete-post', [PostController::class, 'deletePost']);
Route::get('/edit-post/{id}', [PostController::class, 'editPost']);
Route::post('/update-post/{id}', [PostController::class, 'updatePost']);

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;


Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

Route::post('/add_item', [ItemController::class, 'addItem']);
Route::get('/get_items', [ItemController::class, 'getItemsByCategory']);

Route::post('/add_category', [CategoryController::class, 'add_category']);
Route::post('/add_like', [ItemController::class, 'add_like']);

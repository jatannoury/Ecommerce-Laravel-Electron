<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;




Route::group(['prefix' => 'admin'], function($router) {
        Route::group(['middleware' => 'admin'], function($router) {
        Route::post('/add_category', [CategoryController::class, 'addCategory']);
        Route::post('/add_item', [ItemController::class, 'addItem']);
    
    });
});

Route::group(['prefix' => 'user'], function($router) {
    Route::group(['middleware' => 'admin'], function($router) {
        Route::get('/get_items', [ItemController::class, 'getItemsByCategory']);
        Route::post('/add_like', [ItemController::class, 'addLike']);
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
        Route::post('/logout', [JWTController::class, 'logout']);
        Route::post('/refresh', [JWTController::class, 'refresh']);
        Route::post('/profile', [JWTController::class, 'profile']);
    });
});







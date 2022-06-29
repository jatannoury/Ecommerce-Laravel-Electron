<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;






Route::group(['middleware' => 'admin'], function($router) {
    Route::get('/get_items', [ItemController::class, 'getItemsByCategory']);
    Route::post('/add_like', [ItemController::class, 'addLike']);
});




Route::group(['middleware' => 'admin'], function($router) {
    Route::post('/add_category', [CategoryController::class, 'addCategory']);
    Route::post('/add_item', [ItemController::class, 'addItem']);

});
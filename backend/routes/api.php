<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return Auth::user();
});



use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\ForgotpasswordController;

Route::get('users', function(){
    return User::all();
});

Route::group(['namespace'=>'Api\Auth'], function(){
    Route::post('login', [AuthenticationController::class, 'login']);
    Route::post('logout', [AuthenticationController::class, 'logout'])->middleware('auth:api');
    Route::post('register', [RegisterController::class, 'register']);
    Route::post('forgot', [ForgotpasswordController::class, 'forgot']);
    Route::post('reset', 'ForgotPasswordController@reset');
});


use App\Http\Controllers\EventController;
Route::post('event/store', [EventController::class, 'store']);
Route::get('event/index', [EventController::class, 'index']);
Route::get('event/show/{id}', [EventController::class, 'show']);
Route::put('event/update/{id}', [EventController::class, 'update']);
Route::delete('event/delete/{id}', [EventController::class, 'delete']);


use App\Http\Controllers\BookingController;
Route::post('booking/store', [BookingController::class, 'store']);
Route::get('booking/index', [BookingController::class, 'index']);
Route::get('booking/show/{id}', [BookingController::class, 'show']);
Route::put('booking/update/{id}', [BookingController::class, 'update']);
Route::delete('booking/delete/{id}', [BookingController::class, 'delete']);


use App\Http\Controllers\UserController;
Route::post('user/store', [UserController::class, 'store']);
Route::get('user/index', [UserController::class, 'index']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::put('user/update/{id}', [UserController::class, 'update']);
Route::delete('user/delete/{id}', [UserController::class, 'delete']);


// use App\Http\Controllers\CalendarController;
// Route::get('calender/index', [CalendarController::class, 'index']);



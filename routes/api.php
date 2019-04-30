<?php

use Illuminate\Http\Request;

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

Route::group(['prefix' => 'password'],function() {
	Route::post('/email', 'Auth\ForgotPasswordController@getResetToken');
	Route::post('/reset', 'Auth\ResetPasswordController@reset');
});

Route::group(['prefix'=> 'auth'],function(){
    Route::post('/register','Auth\RegisterController@register');
    Route::post("/login",'Auth\LoginController@login');
    Route::post('/login/{social}/callback','Auth\LoginController@handleProviderCallback')->where('social','twitter|facebook|linkedin|google|');
});

Route::middleware(['jwt_auth'])->group(function(){
   Route::get('/hello',function(){
       return "Cool dude";
   });
});


/*
|-------------------------------------------------------------------------------
| 1.1 Get All Users
|-------------------------------------------------------------------------------
| URL:            /api/users
| Controller:     Api\UserController@getAllUsers
| Method:         GET
| Description:    Gets all of the users in the application
*/
Route::get('/users/','Api\UserController@getAllUsers');

/*
|-------------------------------------------------------------------------------
| 1.2 Get An Individual User
|-------------------------------------------------------------------------------
| URL:            /api/users/{id}
| Controller:     Api\UserController@getUser
| Method:         GET
| Description:    Gets an individual user
| Parameters:
|   $id   -> ID of the user we are retrieving
*/
Route::get('/users/{id}','Api\UserController@getUser');

/*
|-------------------------------------------------------------------------------
| 1.3 Adds a New User
|-------------------------------------------------------------------------------
| URL:            /api/users
| Controller:     Api\UserController@create
| Method:         POST
| Description:    Adds a new user to the application
*/
Route::post('/users/','Api\UserController@create');

/*
|-------------------------------------------------------------------------------
| 1.4 Update a User
|-------------------------------------------------------------------------------
| URL:            /api/users/{id}
| Controller:     Api\UserController@update
| Method:         PATCH
| Description:    Update a user from the application
*/
Route::patch('/users/{id}','Api\UserController@update');

/*
|-------------------------------------------------------------------------------
| 1.5 Delete a User
|-------------------------------------------------------------------------------
| URL:            /api/users/{id}
| Controller:     Api\UserController@deleteUser
| Method:         DELETE
| Description:    Delete a user from the application
*/
Route::delete('/users/{id}','Api\UserController@delete');


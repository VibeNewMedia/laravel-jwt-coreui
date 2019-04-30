<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    private $user;
    public function __construct(User $user){
        $this->user = $user;
    }

    public function register(Request $request){
        $user = $this->user->create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);

        return response()->json(['status'=>true,'message'=>'User created successfully','data'=>$user]);

    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        $token = null;
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['invalid_email_or_password'], 422);
            }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }

    // Get All Users
    // Get Individual User
    // Create New User
    // Update User
    // Delete User
       /*
    |-------------------------------------------------------------------------------
    | Get All Users
    |-------------------------------------------------------------------------------
    | URL:            /api/users
    | Method:         GET
    | Description:    Gets all of the users in the application
    */
    public function getAllUsers(Request $request){

        // $request_user = $this->request_user;
      
        $users = User::where('user_status', 'publish')->get();

         return response()->json([
            'status'=> 200,
            'type'=>'GET',
            'message'=>'OK: Successfully retrieved all Users',
            'data'=>$users,
        ]);

    }

    public function getUser(Request $request, $id){
        // $request_user = $this->request_user;
        $user = User::where('user_status', 'publish')->where('id', '=', $id)->get();
         return response()->json([
            'status'=> 200,
            'type'=>'GET',
            'message'=>'OK: Successfully retrieved all Users',
            'data'=>$user,
        ]);

    }

    public function create(Request $request) {

         $new_user = User::create($request->all());
         return response()->json([
            'status'=> 201,
            'type'=>'POST',
            'message'=>'Created: Successfully created new User',
            'data'=>$new_user
        ], 201);

    }

    public function update(Request $request, $id) {
        $user_to_update = User::find($id);
        // return $request;
        // Check if the user_to_update exists
        if ( $user_to_update == null ){
            return response()->json([
                "status" => 404,
                'type'=>'GET',
                "message" => "NOT FOUND: User does not exist.",
                "data" => null,
            ], 404);
        }

        $request->merge(['password' => Hash::make($request->password)]);
        $user_to_update->fill($request->all());
         
    
        $user_to_update->save();

    
        return response()->json([
            'status'=> 200,
            'type'=>'PATCH',
            'message'=>'OK: Successfully updated User',
            'data'=>$user_to_update
        ]);


    }

    /*
    |-------------------------------------------------------------------------------
    | Deletes a User
    |-------------------------------------------------------------------------------
    | URL:            /api/users/{id}
    | Method:         DELETE
    | Description:    Deletes a user from the application
    */
    public function delete(Request $request, $id) {
        
        $user_to_delete =  User::find($id);

        // Check if the user_to_delete is an actual user
        if ( $user_to_delete == null ){
            return response()->json([
                "status" => 404,
                'type'=>'GET',
                "message" => "NOT FOUND: User does not exist.",
                "data" => null,
            ], 404);
        }
        // If logged_in_user is Staff
        //if ($logged_in_user->permitIsStaff()){}
        // If logged_in_user is the user_to_delete
        if ($logged_in_user->id == $user_to_delete->id) {
            $user_to_delete->where('id', $id)->delete();

        }
        else {
            return response()->json([
                "status" => 403,
                'type'=>'DELETE',
                "message" => "PERMISSION DENIED: You do not have permission to delete Users from this Group.",
                "data" => null,
            ], 403);
        }

        return response()->json([
            'status'=> 200,
            'type'=>'DELETE',
            'message'=>'OK: Successfully delete User',
            'data'=>$user_to_delete
        ]);
    }
}

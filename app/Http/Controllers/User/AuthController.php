<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['login','register']]);
    }

    public function login(Request $request){
        $inputs = $request->all();

        $v = validator($inputs, [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($v->fails()){
            return response()->json('Email or password missing', 422);
        }

        $token = Auth::attempt([
            'email' => $inputs['email'],
            'password' => $inputs['password'],
        ]);

        if (!$token){
            return response()->json('Email or password not correct', 401);
        }

        $user = User::where('email', $inputs['email'])->first();

        return response()->json([
            'user' => $user,
            'authToken' => $user->createToken('authToken')->plainTextToken,
        ], 200);
    }

    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $inputs = $request->all();

        $v = validator($inputs, [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        if ($v->fails()){
            return response()->json($v->errors()->all(), 409);
        }

        $user = new User();
        $user->first_name = $request['firstName'];
        $user->last_name = $request['lastName'];
        $user->email = $request['email'];
        $user->password = bcrypt($request['password']);
        $user->role_id = EMPLOYEE_ROLE;
        $user->save();

        return response()->json([
            'user' => $user,
            'authToken' => $user->createToken('authToken')->plainTextToken,
        ], 200);
    }

    public function getUserByToken(Request $request){
        try {
            $token = PersonalAccessToken::findToken($request->header('accessToken'))?->tokenable;
            return response()->json($token);
        }catch (\Exception $e){
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function logout(Request $request){
//        $request->user()->tokens()->delete();
        $request->user()->currentAccessToken();
//        dd($request->session());
        Auth::guard('web')->logout();
        return response()->json([
            'message' => 'Logged out successfully',
            'user' => Auth::user(),
            'data' => $request->user()->currentAccessToken(),
            'tokens' => $request->user()->tokens(),
        ]);
    }
}

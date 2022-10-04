<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class ValidateUserToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->hasHeader('accessToken')){
            $token = PersonalAccessToken::findToken($request->header('accessToken'));
            if (!empty($token)){
                if (!empty($token->tokenable)){
                    $request['user'] = $token->tokenable;
                    return $next($request);
                }
            }
        }
        return response()->json('Unauthenticated', 401);
    }
}

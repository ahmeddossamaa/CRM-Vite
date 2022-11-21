<?php

namespace App\Traits;

trait Helpers
{
    public function getResponse($status, $message = '', $data = '', $code = 200): \Illuminate\Http\JsonResponse
    {
        $code = !empty($code)? $code: ($status == 'success'? 200: 422);

        return response()->json([
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}

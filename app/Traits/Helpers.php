<?php

namespace App\Traits;

trait Helpers
{
    public function getResponse($status, $message = '', $data = '', $code = 200): \Illuminate\Http\JsonResponse
    {
        if (empty($code)) {
            switch ($status) {
                case 'success':
                    $code = 200;
                    break;
                case 'error':
                    $code = 422;
                    break;
            }
        }
        return response()->json([
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function notFound(){
        return response()->json([
            "message"=>"Unauthorized"
        ],404);
    }
}

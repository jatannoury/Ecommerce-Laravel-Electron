<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add_category(Request $request){
        $category=new Category;
        $category->name=$request->name;
        $category->category_id=$request->category_id;
        return response()->json
    }
}

<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    

public function addCategory(Request $request){
    $category=new Category;
    $category->name=$request->name;
    $category->category_id=$request->category_id;
    $category->save();
    return response()->json([
        "status"=>"Success",
        "category"=>$category
    ]);
}
public function getCategories(Request $request){
    return Category::all();
   

}
}

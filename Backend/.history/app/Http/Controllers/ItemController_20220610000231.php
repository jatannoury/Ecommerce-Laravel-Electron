<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function addItem(Request $request){
        $item=new Item;
        $item->name=$request->name;
        $item->price=$request->price;
        $item->category_id=$request->category_id;
        $item->image=$request->image;
        $item->save();
        return response()->json([
            "status"=>"Success",
            "item"=>$item
        ]);
    }

    public function getItemsByCategory(Request $request){
        $category_id=$request->category_id;
        return Item::where("category_id",$category_id)->get();
    }

    public function addLike (){
        
    }

}

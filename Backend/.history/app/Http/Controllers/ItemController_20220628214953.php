<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Like;
use App\Models\Category;
use Illuminate\Http\Request;


class ItemController extends Controller
{
    public function addItem(Request $request){
        $category_name=$request->category_name;
        $item=new Item;
        $item->name=$request->name;
        $item->price=$request->price;
        $item->category_id=Category::where("name",$category_name)->get()[0]["id"];
        $item->image=$request->image;
        $item->save();
        return response()->json([
            "status"=>"Success",
            "item"=>$item
        ]);
    }

    public function getItemsByCategory(Request $request){
        $category_name=$request->category_name;
        $curr_cat=Category::where("name",$category_name)->get();
        $curr_cat=$curr_cat[0]["id"];
        $items=Item::all()->where("category_id",$curr_cat);
        // return response()->json([
        //     "status"=>"Success",
        //     "item"=>$items
        // ]);
       
    }

    public function addLike (Request $request){
        $like=new Like;
        $like->item_id=$request->item_id;
        $like->user_id=$request->user_id;
        $like->save();
        return response()->json([
            "status"=>"Success",
            "like"=>$like
        ]);
    }

}

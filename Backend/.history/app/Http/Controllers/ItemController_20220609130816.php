<?php

namespace App\Http\Controllers;

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
        return 
    }
}

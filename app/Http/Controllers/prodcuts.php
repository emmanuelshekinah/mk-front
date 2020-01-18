<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class prodcuts extends Controller
{
    protected $apicotroller;
  public function __construct(ApiController $apicotroller)
        {
        $this->apicotroller = $apicotroller;
        }
    public function index()
    {
        $array = 
        '{
            "user_id": 1
        }
        ';
    $response=$this->apicotroller->post_api('products', $array);
    $contents = json_decode($response->getBody()->getContents());
    // dd($contents);
        return view('welcome', [
            'products'=>$contents
        ]);  
    }

    public function add_cart(Request $request)
    {
        $array = 
        '{
            "user_id":1,
            "product_id":1,
            "quantity":2
        }
        ';
    $response=$this->apicotroller->post_api('add_cart', $array);
    $contents = $response->getBody()->getContents();
    // dd($contents);
    return $contents;
    }
}

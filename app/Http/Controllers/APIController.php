<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
class APIController extends Controller
{
    public function products(Request $request)
    {
        $array = 
        '{
            "user_id": 1
        }
        ';
    $response=$this->post_api('products', $array);
    $contents = json_decode($response->getBody()->getContents());
    return $contents;
    }


    public function post_api($url,$array){
        try{
        $client = new Client(['headers' => [ 'Content-Type' => 'application/json', 'Accept' => 'application/json' ]]);
        $response = $client->request('POST', env('API_URL').'/'.$url, ['body' => $array]);

        return $response;
        }catch (RequestException $e){
            return view('error');
        }
    }

    public function put_api($url,$array){
        try{
        $client = new Client(['headers' => [ 'Content-Type' => 'application/json', 'Accept' => 'application/json' ]]);
        $response = $client->request('PUT', env('API_URL').'/'.$url, ['body' => $array]);
        return $response;
        }catch (RequestException $e){
            return view('error');
        }

    }


}

<?php

namespace App\Http\Controllers;

use App\Models\Testing;
use App\Http\Requests\StoreTestingRequest;
use App\Http\Requests\UpdateTestingRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TestingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $test= Testing::all();
        $data= response()->json(['message'=>'success', 'data'=>$test]);
        return $data;
        // dd($a);

        // $waktu = date('Y/m/d');
        // // $pengumuman=Pengumuman::orderBy('id','desc')->paginate(4);
        // $link = 'https://api.myquran.com/v1/sholat/jadwal/1204/' . $waktu;
        // $response= Http::get($link);
        // $data= $response->json();
        // dd($data);
        // $data = array(compact('data'));
        // $data=($data[0]['data']['data']['jadwal']);
        
        // // $kegiatan= Poster::orderBy('id','desc')->paginate(3);
        // return view('index',$data,compact('pengumuman','kegiatan'));
    }

    public function test()
    {
        // $waktu = date('Y/m/d');
        // $link = 'http://127.0.0.1:8000/api/test/'. $waktu;
        // // $response= Http::get($link);
        // $response= Http::get($link);
        // $data= $response->json();
        // dd($data);
        $test= Testing::all();
        $data= response()->json(['message'=>'success', 'data'=>$test]);
        $response = $data; // Gantikan dengan objek Response Anda
        $content = $response->getContent();
        $data = json_decode($content, true);
        $data=$data['data'][0];
        // dd($data);
        return view('index',compact('data'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $test= Testing::create($request->all());
        return response()->json(['message'=>'succes', 'data'=>$test]);
    }

    /**
     * Display the specified resource.
     */
    public function show( $id )
    {
        $test= Testing::find($id);
        return response()->json(['message'=>'berhasil insert', 'data'=>$test]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testing $testing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request, Testing $testing)
    {
        $test= Testing::where('id',$id)->update($request->all());
        return response()->json(['message'=>'berhasil update', 'data'=>$test]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id, Testing $testing)
    {
        $test= Testing::where('id',$id)->delete();
        return response()->json(['message'=>'berhasil dihapus', 'data'=>null]);   
    }
}

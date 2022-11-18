<?php

namespace App\Http\Controllers;

use App\Traits\Helpers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

abstract class GenericController extends MainController
{
    protected string $name = 'Record';
    protected Model $model;

    protected function setModel(string $path){
        $this->model = app($path);
    }
    protected function setName(string $name){
        $this->name = $name;
    }

    public function genericStore(Request $request){
        $inputs = $request->all();
        $object = new $this->model;

        foreach ($inputs as $key => $value){
            $object->$key = $value;
        }

        $object->save();

        return $this->getResponse('success', "$this->name Added Successfully", $object);
    }
    public function store(Request $request){
        return $this->genericStore($request);
    }

    public function genericUpdate(Request $request, $id){
        $inputs = $request->all();
        $object = $this->model::find($id);
        if(empty($object)){
            return $this->getResponse('error', "$this->name Not Found", $object, 422);
        }

        foreach ($inputs as $key => $value){
            $object->$key = $value;
        }

        $object->save();

        return $this->getResponse('success', "$this->name Added Successfully", $object);
    }
    public function update(Request $request, $id){
        return $this->genericUpdate($request, $id);
    }

    public function genericIndex(){
        return $this->getResponse('success', '', $this->model::all());
    }
    public function index(){
        return $this->genericIndex();
    }

    public function genericShow($id){
        $object = $this->model::find($id);
        if (empty($object)){
            return $this->getResponse('error', "$this->name Not Found", null);
        }
        return $this->getResponse('success', "", $object);
    }
    public function show($id){
        return $this->genericShow($id);
    }

    public function genericDestroy($id){
        $object = $this->model::find($id);
        if (empty($object)){
            return $this->getResponse('error', "$this->name not Found", '');
        }

        $object->delete();
        return $this->getResponse('success', "$this->name Deleted Successfully", '');
    }
    public function destroy($id){
        return $this->genericDestroy($id);
    }
}

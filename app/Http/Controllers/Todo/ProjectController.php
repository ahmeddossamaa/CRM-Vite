<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\GenericController;
use App\Models\Todo\Project;
use Illuminate\Support\Facades\Auth;

class ProjectController extends GenericController
{
    public function __construct(){
        $this->setModel(Project::class);
        $this->setName('Project');
    }

    /*public function index()
    {
//        return Auth::user();
        return Project::where('user_id', Auth::user())->get();
    }*/
}

<?php

namespace App\Models\Todo;

use App\Models\MainModel;

class Task extends MainModel
{
    public function project(){
        return $this->belongsTo(Project::class);
    }
}

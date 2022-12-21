<?php

namespace App\Models\Todo;

use App\Models\MainModel;

class Project extends MainModel
{
    public function tasks(){
        return $this->hasMany(Task::class);
    }
}

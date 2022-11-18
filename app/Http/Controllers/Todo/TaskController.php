<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\GenericController;
use App\Models\Todo\Task;

class TaskController extends GenericController
{
    public function __construct(){
        $this->setModel(Task::class);
        $this->setName('Task');
    }
}

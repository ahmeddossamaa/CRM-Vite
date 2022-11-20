<?php

namespace App\Models\User;

use App\Models\MainModel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends MainModel
{
    use HasFactory;

    protected $fillable = ['user_id', 'role_id'];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}

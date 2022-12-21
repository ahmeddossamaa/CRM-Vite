<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\User\Role;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::factory()->create([
            'title' => 'Admin',
            'slug' => 'admin',
            'is_active' => 1,
        ]);
    }
}

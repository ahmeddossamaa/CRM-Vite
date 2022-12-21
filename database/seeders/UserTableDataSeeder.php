<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Ahmed Osama',
            'email' => 'ahmeddossamaa184@gmail.com',
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('1842002aa'),
            'role_id' => 1,
        ]);
    }
}

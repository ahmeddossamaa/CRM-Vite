<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ahmed Osama',
            'email' => 'ahmeddossamaa184@gmail.com',
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('1842002aa'),
            'role_id' => 1,
        ]);
    }
}

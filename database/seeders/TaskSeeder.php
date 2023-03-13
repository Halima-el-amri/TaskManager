<?php

namespace Database\Seeders;

use App\Task;

use Illuminate\Database\Seeder;

//use Illuminate\Console\View\Components\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Task::factory()->create();
    }
}

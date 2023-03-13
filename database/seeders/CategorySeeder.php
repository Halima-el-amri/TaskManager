<?php

namespace Database\Seeders;

use App\Category;
use Illuminate\Database\Seeder;
use App\Category as AppCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         Category::factory(10)->create();
    }
}

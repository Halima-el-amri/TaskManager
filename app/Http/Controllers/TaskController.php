<?php

namespace App\Http\Controllers;

use App\Category;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::with('category')->paginate(10);
    }

 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $task=Task::create([
          'title'=>$request->title,
           'body'=>$request->body,
           'category_id'=>$request->category_id,
           
        ]);
        return $task;
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return $task;
    }

  
    public function update(Request $request, Task $task)
    {
     $task->update([
        'title'=>$request->title,
        'body'=>$request->body,
        'category_id'=>$request->category_id,
        'done'=>$request->done,
     ]);
     return $task;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( Task $task)
    {
       $task->delete(); 
       return['message'=>'your task was delated perfectely'];
    }
 public function getTaskByCategory(Category $category){
     return $category->task()->with('category')->paginate(10);
 }
 public function getTasksOroderBy($column , $direction){
   return Task::with('category')->orderBy($column,$direction)->paginate(10);
 }
 
 public function getTaskByTerm($term){
   $tasks=Task::with('category')
   ->where('title','like' ,'%'.$term.'%')
   ->orwhere('id','like' ,'%'.$term.'%')
   ->orwhere('body','like' ,'%'.$term.'%')
   ->paginate(10);
   return $tasks;
 }
}



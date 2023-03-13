<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable=['title','body','done','category_id'];


     public function category(){
 return $this->belongsTo(Category::class);
     }

     public function getCreatedAtAttribute($value)
     {
        return Carbon::parse($value)->diffForHumans();
     }
}

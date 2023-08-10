<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testing extends Model
{
    protected $table= 'test';
    protected $guarded=['id'];

    public $timestamps=false;
    use HasFactory;
}

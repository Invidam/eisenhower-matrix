<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $casts = [
        'deadline' => 'timestamp',
    ];
    protected $fillable = [
        'title',
        'date',
        'priority',
        'description',
        'is_done',
        'user_id',
        'deadline'
    ];
}

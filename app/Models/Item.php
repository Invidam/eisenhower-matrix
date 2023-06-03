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

    public static function getSortedOptions($sortBy, $sortDirection = "asc")
    {
        $query = self::orderBy($sortBy, $sortDirection);

        $secondarySortBy = $sortBy == 'deadline' ?  'priority' : 'deadline';
        $secondarySortDirection = "desc";

        $query->orderBy($secondarySortBy, $secondarySortDirection);

        $options = $query->pluck($sortBy, 'id')->all();

        return $query->get();
    }
    public static function getSortedItemsForUser($userId, $sortBy, $sortDirection = "asc")
    {
        $query = self::where('user_id', $userId)
            ->orderBy($sortBy, $sortDirection);

        $secondarySortBy = $sortBy == 'deadline' ? 'priority' : 'deadline';
        $secondarySortDirection = "asc";//'deadline' ? "desc" : "asc";

        $query->orderBy($secondarySortBy, $secondarySortDirection);

        $items = $query->get();

        return $items;
    }

}

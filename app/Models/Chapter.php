<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    public function book()
    {
        return $this->belongsTo(\App\Models\Book::class);
    }

    public function verses()
    {
        return $this->hasMany(Verse::class);
    }
}

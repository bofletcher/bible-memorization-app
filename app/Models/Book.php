<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function translation()
    {
        return $this->belongsTo(\App\Models\Translation::class);
    }

    public function chapters()
    {
        return $this->hasMany(\App\Models\Chapter::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MyVerse extends Model
{
    protected $fillable = ['user_id', 'verse_id'];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function verse()
    {
        return $this->belongsTo(\App\Models\Verse::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Verse extends Model
{
    public function chapter()
    {
        return $this->belongsTo(\App\Models\Chapter::class);
    }

    public function tags()
    {
        return $this->belongsToMany(\App\Models\Tag::class, 'verse_tag');
    }

    public function memorizationProgress()
    {
        return $this->hasMany(\App\Models\MemorizationProgress::class);
    }
}

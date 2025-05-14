<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function verses()
    {
        return $this->belongsToMany(\App\Models\Verse::class, 'verse_tag');
    }
}

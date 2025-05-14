<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $fillable = [
        'name',
        'abbreviation',
        'slug',
    ];

    public function books()
    {
        return $this->hasMany(\App\Models\Book::class);
    }
}

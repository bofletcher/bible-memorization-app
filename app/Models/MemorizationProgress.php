<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MemorizationProgress extends Model
{
    protected $fillable = [
        'user_id',
        'verse_id',
        'last_reviewed_at',
        'next_review_date',
        'interval',
        'ease_factor',
        'repetitions',
        'correct_streak',
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function verse()
    {
        return $this->belongsTo(\App\Models\Verse::class);
    }
}

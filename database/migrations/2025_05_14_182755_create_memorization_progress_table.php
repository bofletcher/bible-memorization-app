<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('memorization_progresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('verse_id')->constrained()->onDelete('cascade');
    
            $table->date('last_reviewed_at')->nullable(); // Last time the verse was reviewed
            $table->date('next_review_date')->nullable(); // When to show the verse again
            $table->unsignedInteger('interval')->default(1); // Days between reviews
            $table->decimal('ease_factor', 4, 2)->default(2.5); // SM-2 ease factor
            $table->unsignedInteger('repetitions')->default(0); // How many times it's been reviewed
            $table->unsignedInteger('correct_streak')->default(0); // How many times in a row it's been correct
    
            $table->timestamps();
    
            $table->unique(['user_id', 'verse_id']); // Prevent duplicate progress rows per user/verse
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memorization_progress');
    }
};

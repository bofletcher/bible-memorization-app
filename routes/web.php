<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\MyVerseController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/translations', [TranslationController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('translations.index');

Route::get('/translations/{translation:slug}/books', [TranslationController::class, 'books'])
    ->middleware(['auth', 'verified'])
    ->name('translations.books');

Route::get('/translations/{translation:slug}/books/{book}/chapters', [\App\Http\Controllers\TranslationController::class, 'chapters'])
    ->middleware(['auth', 'verified'])
    ->name('translations.books.chapters');

Route::get('/translations/{translation:slug}/books/{book}/chapters/{chapter}', [\App\Http\Controllers\TranslationController::class, 'viewChapter'])
    ->middleware(['auth', 'verified'])
    ->name('translations.books.chapters.view');

Route::post('/my-verses', [MyVerseController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('my-verses.store');


Route::post('/my-verses', [MyVerseController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('my-verses.store');

Route::get('/my-verses', [MyVerseController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('my-verses.index');

Route::delete('/my-verses/{myVerse}', [MyVerseController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('my-verses.destroy');

require __DIR__.'/auth.php';

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Translation;
use App\Models\Book;
use App\Models\Chapter;
use Inertia\Inertia;

class TranslationController extends Controller
{
    //
    public function index()
    {
        $translations = Translation::select('id', 'name', 'abbreviation', 'slug')->get();

        return Inertia::render('Translations/Index', [
            'translations' => $translations,
        ]);
    }

    public function books(Translation $translation)
    {
        $books = $translation->books()
            ->select('id', 'name', 'order', 'testament')
            ->orderBy('order')
            ->get();

        return Inertia::render('Translations/Books', [
            'translation' => $translation,
            'books' => $books,
        ]);
    }


    public function chapters(Translation $translation, Book $book)
    {
        $chapters = $book->chapters()
            ->select('id', 'number')
            ->orderBy('number')
            ->get();

        return Inertia::render('Translations/Chapters', [
            'translation' => $translation,
            'book' => $book,
            'chapters' => $chapters,
        ]);
    }

    public function viewChapter(Translation $translation, Book $book, Chapter $chapter)
    {
        $verses = $chapter->verses()
            ->orderBy('number')
            ->get();

        return Inertia::render('Translations/ChapterView', [
            'translation' => $translation,
            'book' => $book,
            'chapter' => $chapter,
            'verses' => $verses,
        ]);
    }
}

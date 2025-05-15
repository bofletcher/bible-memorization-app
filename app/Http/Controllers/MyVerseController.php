<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MyVerse;
use Inertia\Inertia;

class MyVerseController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'verse_ids' => 'required|array',
            'verse_ids.*' => 'exists:verses,id',
        ]);

        $user = $request->user();

        foreach ($request->verse_ids as $verseId) {
            MyVerse::firstOrCreate([
                'user_id' => $user->id,
                'verse_id' => $verseId,
            ]);
        }

        return redirect()->back()->with('success', 'Verses saved to My Verses!');
    }

    public function index()
    {
        $user = auth()->user();

        $myVerses = $user->myVerses()
            ->with(['verse.chapter.book.translation'])
            ->latest()
            ->get();

        return Inertia::render('MyVerses/Index', [
            'myVerses' => $myVerses,
        ]);
    }

    public function destroy(MyVerse $myVerse)
    {
        // Optional: check that the verse belongs to the current user
        if ($myVerse->user_id !== auth()->id()) {
            abort(403);
        }

        $myVerse->delete();

        return back()->with('success', 'Verse removed from your list.');
    }
}

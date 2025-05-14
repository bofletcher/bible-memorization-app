<?php

namespace Database\Seeders;

use App\Models\Translation;
use App\Models\Book;
use App\Models\Chapter;
use App\Models\Verse;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class KJVSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            $translation = Translation::create([
                'name' => 'King James Version',
                'abbreviation' => 'KJV',
                'slug' => 'king-james-version',
            ]);

            $csvPath = database_path('data/kjv.csv');
            $file = fopen($csvPath, 'r');

            $bookMap = [];
            $chapterMap = [];

            while (($line = fgetcsv($file, 1000, "\t")) !== false) {
                if (count($line) < 4) continue;

                [$bookName, $chapterNum, $verseNum, $text] = $line;

                $bookKey = strtolower(trim($bookName));
                $chapterKey = $bookKey . '-' . $chapterNum;

                if (!isset($bookMap[$bookKey])) {
                    $book = Book::create([
                        'translation_id' => $translation->id,
                        'name' => ucfirst($bookName),
                        'order' => count($bookMap) + 1,
                        'testament' => $this->guessTestament(ucfirst($bookName)),
                    ]);
                    $bookMap[$bookKey] = $book;
                } else {
                    $book = $bookMap[$bookKey];
                }

                if (!isset($chapterMap[$chapterKey])) {
                    $chapter = Chapter::create([
                        'book_id' => $book->id,
                        'number' => (int)$chapterNum,
                    ]);
                    $chapterMap[$chapterKey] = $chapter;
                } else {
                    $chapter = $chapterMap[$chapterKey];
                }

                Verse::create([
                    'chapter_id' => $chapter->id,
                    'number' => (int)$verseNum,
                    'text' => $text,
                ]);
            }

            fclose($file);
        });
    }

    private function guessTestament(string $book): string
    {
        $otBooks = [
            'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
            'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
            '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job',
            'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
            'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel',
            'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
            'Haggai', 'Zechariah', 'Malachi'
        ];

        return in_array($book, $otBooks) ? 'OT' : 'NT';
    }
}

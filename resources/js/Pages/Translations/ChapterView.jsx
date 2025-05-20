import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { BookmarkCheck } from 'lucide-react';

export default function ChapterView({ translation, book, chapter, verses }) {
  const [selectedVerses, setSelectedVerses] = useState([]);

  const toggleVerse = (verseId) => {
    setSelectedVerses((prev) =>
      prev.includes(verseId) ? prev.filter((id) => id !== verseId) : [...prev, verseId]
    );
  };

  const saveToMyVerses = () => {
    if (selectedVerses.length === 0) return;

    router.post(
      route('my-verses.store'),
      { verse_ids: selectedVerses },
      {
        onSuccess: () => setSelectedVerses([]),
      }
    );
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-bold text-gray-800">
          📖 {translation.name}
        </h2>
      }
    >
      <Head title={`${book.name} ${chapter.number}`} />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* Book Info */}
        <section className="bg-gradient-to-r from-sky-50 to-white border-l-4 border-blue-300 p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold font-serif text-gray-800 mb-2">
            {book.name} {chapter.number}
          </h1>
          <p className="text-sm text-gray-500">
            Translation: <span className="font-medium">{translation.abbreviation}</span>
          </p>
        </section>

        {/* Verses */}
        <Card className="p-6">
          <CardContent className="prose dark:prose-invert text-lg font-serif space-y-4 max-w-none">
            {verses.map((verse) => (
              <span
                key={verse.id}
                onClick={() => toggleVerse(verse.id)}
                className={`cursor-pointer inline-block rounded-md px-1 py-0.5 transition-colors ${
                  selectedVerses.includes(verse.id)
                    ? 'bg-yellow-100 ring-2 ring-yellow-300'
                    : 'hover:bg-gray-100'
                }`}
              >
                <sup className="text-xs text-gray-500 mr-1">{verse.number}</sup>
                {verse.text}{' '}
              </span>
            ))}
          </CardContent>
        </Card>

        {/* Save Button */}
        {selectedVerses.length > 0 && (
          <div className="flex justify-end">
            <Button onClick={saveToMyVerses}>
              <BookmarkCheck className="w-4 h-4 mr-2" />
              Save {selectedVerses.length} Verse{selectedVerses.length > 1 ? 's' : ''}
            </Button>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}

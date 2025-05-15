import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';

export default function ChapterView({ translation, book, chapter, verses }) {
  const [selectedVerses, setSelectedVerses] = useState([]);

  const toggleVerse = (verseId) => {
    setSelectedVerses((prev) =>
      prev.includes(verseId)
        ? prev.filter((id) => id !== verseId)
        : [...prev, verseId]
    );
  };

  const saveToMyVerses = () => {
    if (selectedVerses.length === 0) return;

    router.post(route('my-verses.store'), {
      verse_ids: selectedVerses,
    }, {
      onSuccess: () => {
        setSelectedVerses([]); // reset selection after saving
      }
    });
  };

  return (
    <>
      <Head title={`${book.name} ${chapter.number}`} />
      <div className="max-w-3xl mx-auto py-8 px-4 prose dark:prose-invert">
        <h1 className="text-3xl font-serif mb-6">
          {book.name} {chapter.number} <span className="text-gray-400 text-base">({translation.abbreviation})</span>
        </h1>

        <div className="bg-white p-6 rounded shadow-md leading-relaxed text-lg font-serif space-y-3">
          {verses.map((verse) => (
            <span
              key={verse.id}
              onClick={() => toggleVerse(verse.id)}
              className={`cursor-pointer inline-block ${
                selectedVerses.includes(verse.id) ? 'bg-yellow-100' : ''
              }`}
            >
              <sup className="text-xs text-gray-500 mr-1">{verse.number}</sup>
              {verse.text}{' '}
            </span>
          ))}
        </div>

        {selectedVerses.length > 0 && (
          <div className="mt-6">
            <button
              onClick={saveToMyVerses}
              className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            >
              💾 Save {selectedVerses.length} Verse{selectedVerses.length > 1 ? 's' : ''} to My Verses
            </button>
          </div>
        )}
      </div>
    </>
  );
}

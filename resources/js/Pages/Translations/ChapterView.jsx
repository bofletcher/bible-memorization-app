import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function ChapterView({ translation, book, chapter, verses }) {
  const [selectedVerses, setSelectedVerses] = useState([]);

  const toggleSelectVerse = (verseId) => {
    setSelectedVerses((prev) =>
      prev.includes(verseId)
        ? prev.filter((id) => id !== verseId)
        : [...prev, verseId]
    );
  };

  return (
    <>
      <Head title={`${book.name} ${chapter.number}`} />
      <div className="max-w-3xl mx-auto py-8 px-4 prose prose-lg dark:prose-invert">
        <h1 className="text-3xl font-serif mb-6">
          {book.name} {chapter.number} <span className="text-gray-400 text-base">({translation.abbreviation})</span>
        </h1>

        <div className="bg-white p-6 rounded shadow-md leading-relaxed text-lg font-serif space-y-3">
          {verses.map((verse) => (
            <span
              key={verse.id}
              onClick={() => toggleSelectVerse(verse.id)}
              className={`cursor-pointer ${
                selectedVerses.includes(verse.id) ? 'bg-yellow-100' : ''
              }`}
            >
              <sup className="text-xs text-gray-500 mr-1">{verse.number}</sup>
              {verse.text}{' '}
            </span>
          ))}
        </div>

        {selectedVerses.length > 0 && (
          <div className="mt-8 border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Selected Verses</h2>
            <ul className="list-disc list-inside">
              {selectedVerses.map((verseId) => {
                const verse = verses.find((v) => v.id === verseId);
                return (
                  <li key={verseId}>
                    <span className="font-semibold">v{verse.number}:</span> {verse.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

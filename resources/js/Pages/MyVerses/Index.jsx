import React from 'react';
import { Head, router } from '@inertiajs/react';

export default function MyVerses({ myVerses }) {
  const deleteVerse = (id) => {
    if (confirm('Are you sure you want to remove this verse?')) {
      router.delete(route('my-verses.destroy', id));
    }
  };

  return (
    <>
      <Head title="My Verses" />
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">📖 My Saved Verses</h1>

        {myVerses.length === 0 ? (
          <p className="text-gray-500">You haven’t saved any verses yet.</p>
        ) : (
          <ul className="space-y-4">
            {myVerses.map((entry) => {
              const verse = entry.verse;
              const chapter = verse?.chapter;
              const book = chapter?.book;
              const translation = book?.translation;

              return (
                <li
                  key={entry.id}
                  className="bg-white p-4 rounded shadow-md flex justify-between items-start"
                >
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      {book?.name} {chapter?.number}:{verse?.number} ({translation?.abbreviation})
                    </div>
                    <div className="text-lg leading-relaxed">{verse?.text}</div>
                  </div>
                  <button
                    onClick={() => deleteVerse(entry.id)}
                    className="ml-4 text-red-600 hover:text-red-800 text-sm"
                    title="Remove verse"
                  >
                    🗑️
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

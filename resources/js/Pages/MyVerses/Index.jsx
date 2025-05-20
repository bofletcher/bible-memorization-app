import React from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardHeader, CardContent } from '@/Components/ui/card';
import { Trash2 } from 'lucide-react';

export default function MyVerses({ myVerses }) {
  const deleteVerse = (id) => {
    if (confirm('Are you sure you want to remove this verse?')) {
      router.delete(route('my-verses.destroy', id));
    }
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-bold text-gray-800">🔖 My Verses</h2>}
    >
      <Head title="My Verses" />

      <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

        {/* Intro Panel */}
        <section className="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-300 p-6 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Your Saved Verses</h1>
          <p className="text-sm text-gray-600">
            Review, memorize, or remove verses you’ve saved while browsing.
          </p>
        </section>

        {/* Verse List */}
        {myVerses.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm italic">
            You haven’t saved any verses yet.
          </div>
        ) : (
          <div className="space-y-4">
            {myVerses.map((entry) => {
              const verse = entry.verse;
              const chapter = verse?.chapter;
              const book = chapter?.book;
              const translation = book?.translation;

              return (
                <Card key={entry.id} className="relative group">
                  <CardHeader className="pb-2">
                    <div className="text-sm text-gray-500">
                      {book?.name} {chapter?.number}:{verse?.number} ({translation?.abbreviation})
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg leading-relaxed font-serif text-gray-800">
                      {verse?.text}
                    </div>
                  </CardContent>

                  <button
                    onClick={() => deleteVerse(entry.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                    title="Remove this verse"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}

import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { BookMarked } from 'lucide-react';

export default function Chapters({ translation, book, chapters }) {
  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-bold text-gray-800">📖 {translation.name}</h2>}
    >
      <Head title={`Chapters in ${book.name}`} />

      <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

        {/* Info Panel */}
        <section className="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-300 p-6 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {book.name}
          </h1>
          <p className="text-sm text-gray-600">
            Select a chapter to view and begin memorizing in the <strong>{translation.abbreviation}</strong> translation.
          </p>
        </section>

        {/* Chapters Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={route('translations.books.chapters.view', {
                translation: translation.slug,
                book: book.id,
                chapter: chapter.id,
              })}
            >
              <Card className="hover:shadow-md transition cursor-pointer text-center">
                <CardContent className="py-4 text-sm font-medium text-gray-700 hover:text-green-700">
                  Chapter {chapter.number}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

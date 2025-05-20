import React from 'react';
import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { BookMarked } from 'lucide-react';

export default function Books({ translation, books }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-bold text-gray-800">
          📖 {translation.name}
        </h2>
      }
    >
      <Head title={`Books in ${translation.abbreviation}`} />

      <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

        {/* Intro Panel */}
        <section className="bg-gradient-to-r from-indigo-50 to-white border-l-4 border-indigo-300 p-6 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Books of the Bible
          </h1>
          <p className="text-sm text-gray-600">
            Choose a book to view its chapters in the {translation.abbreviation} translation.
          </p>
        </section>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <Link
              key={book.id}
              href={route('translations.books.chapters', {
                translation: translation.slug,
                book: book.id,
              })}
            >
              <Card className="hover:shadow-md transition cursor-pointer group">
                <CardContent className="p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-semibold text-gray-800 group-hover:text-indigo-700">
                    <BookMarked className="w-4 h-4 text-indigo-500 group-hover:text-indigo-700" />
                    {book.name}
                  </div>
                  <div className="text-xs text-gray-500 uppercase">{book.testament}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

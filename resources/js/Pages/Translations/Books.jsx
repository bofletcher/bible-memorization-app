import React from 'react';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Books({ translation, books }) {
  return (
    <>
      <Head title={`Books in ${translation.abbreviation}`} />
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          {translation.name} ({translation.abbreviation})
        </h1>
            <ul className="grid grid-cols-2 gap-4">
                {books.map((book) => (
                    <li key={book.id} className="p-3 bg-white rounded shadow">
                        <Link href={route('translations.books.chapters', {
                        translation: translation.slug,
                        book: book.id,
                        })}>
                        <div className="font-semibold">{book.name}</div>
                        <div className="text-sm text-gray-500">{book.testament}</div>
                        </Link>
                    </li>
                ))}
            </ul>
      </div>
    </>
  );
}

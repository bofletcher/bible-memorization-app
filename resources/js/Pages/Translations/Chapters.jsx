import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Chapters({ translation, book, chapters }) {
  return (
    <>
      <Head title={`Chapters in ${book.name}`} />
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          {book.name} – {translation.abbreviation}
        </h1>
        <ul className="grid grid-cols-4 gap-3">
            {chapters.map((chapter) => (
                <li key={chapter.id}>
                    <Link
                    href={route('translations.books.chapters.view', {
                        translation: translation.slug,
                        book: book.id,
                        chapter: chapter.id,
                    })}
                    className="p-3 bg-white rounded shadow text-center hover:bg-gray-100"
                    >
                    Chapter {chapter.number}
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}

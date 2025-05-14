import React from 'react';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Index({ translations }) {
  return (
    <>
      <Head title="Bible Translations" />
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Choose a Translation</h1>
        <ul className="space-y-4">
            {translations.map((translation) => (
                <li
                    key={translation.id}
                    className="p-4 bg-white rounded shadow hover:bg-gray-100 transition"
                >
                    <Link href={route('translations.books', translation.slug)}>
                    <div className="font-semibold">{translation.name}</div>
                    <div className="text-sm text-gray-500">{translation.abbreviation}</div>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}

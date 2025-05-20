import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { BookMarked } from 'lucide-react';

export default function Index({ translations }) {
  return (
    <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">📖 Bible Translations</h2>}>
      <Head title="Bible Translations" />

      <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
        {/* Introduction */}
        <section className="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-300 p-6 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Choose a Translation</h1>
          <p className="text-gray-600 text-sm">
            Select a Bible translation to browse books and begin memorizing verses.
          </p>
        </section>

        {/* Translations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.map((translation) => (
            <Link key={translation.id} href={route('translations.books', translation.slug)}>
              <Card className="hover:shadow-md transition cursor-pointer group">
                <CardContent className="p-5 flex items-start gap-4">
                  <BookMarked className="w-6 h-6 text-blue-600 group-hover:text-blue-800" />
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-800">
                      {translation.name}
                    </div>
                    <div className="text-sm text-gray-500">{translation.abbreviation}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

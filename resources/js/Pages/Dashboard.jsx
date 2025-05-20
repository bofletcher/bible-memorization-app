import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BookMarked, Bookmark, Brain, Flame } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    🧠 Scripture Memory Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">

                {/* Hero Welcome */}
                <section className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl shadow flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                            Welcome, {auth.user.name.split(' ')[0]}!
                        </h1>
                        <p className="text-gray-700 text-sm sm:text-base">
                            “I have stored up your word in my heart, that I might not sin against you.” – Psalm 119:11
                        </p>
                    </div>
                    <Flame className="w-16 h-16 text-purple-500 animate-pulse" />
                </section>

                {/* Quick Action Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-800">
                                <BookMarked className="w-5 h-5" />
                                Browse Bible
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-gray-700">
                                Explore translations, select verses, and begin memorizing.
                            </p>
                            <Link href={route('translations.index')}>
                                <Button variant="default" className="w-full">📖 Start Browsing</Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-800">
                                <Bookmark className="w-5 h-5" />
                                My Verses
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-gray-700">
                                Practice and review your saved verses with memory tools.
                            </p>
                            <Link href={route('my-verses.index')}>
                                <Button variant="default" className="w-full">🔖 View My Verses</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </section>

                {/* Stats / Motivation */}
                <section className="grid sm:grid-cols-2 gap-6">
                    <Card className="bg-white">
                        <CardHeader>
                            <CardTitle className="text-gray-700 flex gap-2 items-center">
                                <Brain className="w-5 h-5 text-indigo-500" />
                                Practice Streak
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">You’ve saved <strong>12 verses</strong> and practiced <strong>3</strong> this week. Keep going!</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-l-4 border-yellow-400 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-yellow-700">📜 Daily Inspiration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="italic text-gray-600">
                                “Do not be conformed to this world, but be transformed by the renewal of your mind…” <br />
                                <span className="text-sm text-gray-500">– Romans 12:2</span>
                            </blockquote>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </AuthenticatedLayout>
    );
}


import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getItem(id) {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(fileContents);
    return items.find((item) => item.id === parseInt(id));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return {
            title: 'Item Not Found',
        };
    }

    return {
        title: item.name,
        description: item.description,
    };
}

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/items" className="text-primary hover:underline flex items-center gap-2">
                        &larr; Back to All Items
                    </Link>
                </div>

                <div className="bg-surface rounded-2xl shadow-xl border border-primary/10 overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 bg-black flex items-center justify-center min-h-100">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="max-h-125 w-full object-contain"
                        />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                {item.brand}
                            </span>
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full uppercase">
                                {item.category.replace('_', ' ')}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                            {item.name}
                        </h1>

                        <div className="text-4xl font-bold text-primary mb-8">
                            {item.currency === 'USD' ? '$' : '৳'}{item.price}
                        </div>

                        <p className="text-lg text-black dark:text-gray-300 mb-8 leading-relaxed">
                            {item.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-background border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full md:w-auto bg-primary text-primary-foreground font-bold py-4 px-8 rounded-xl hover:opacity-90 transition transform active:scale-95 shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

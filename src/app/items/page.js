
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

async function getItems() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export const metadata = {
    title: 'All Items',
    description: 'Browse all our campus gear',
};

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold text-foreground mb-12 text-center">
                    All Gear
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={`/items/${item.id}`}
                            className="bg-surface rounded-xl shadow-lg border border-primary/10 overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col group"
                        >
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-[black] relative h-64">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-full object-contain p-4 group-hover:opacity-90 transition rounded-2xl"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-medium text-primary uppercase tracking-wide">
                                            {item.brand}
                                        </p>
                                        <p className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full uppercase text-xs">
                                            {item.category.replace('_', ' ')}
                                        </p>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-xl font-bold text-foreground">
                                        {item.currency === 'USD' ? '$' : '৳'}{item.price}
                                    </p>
                                    <span className="text-sm font-medium text-primary group-hover:underline">
                                        View Details &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

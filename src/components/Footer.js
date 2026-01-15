import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-primary/10 py-12 px-4 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-linear-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">
                        Campus Gear
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Campus Gear. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span>Built with ❤️ by</span>
                    <a
                        href="https://github.com/dibbockb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 transition-colors"
                    >
                        Dibbo Chakraborty
                        <FaGithub className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

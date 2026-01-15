'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const loginCookie = Cookies.get('isLoggedin');
        setIsLoggedIn(loginCookie === 'true');
    }, [pathname]);

    const handleLogout = () => {
        Cookies.remove('isLoggedin');
        setIsLoggedIn(false);
        router.push('/login');
        router.refresh();
    };

    return (
        <nav className="bg-surface text-primary border-b border-primary/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl hover:opacity-80 transition">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z" />
                        </svg>
                        <span>Campus Gear</span>
                    </Link>

                    <div className="flex items-center gap-6 font-medium">
                        <Link href="/items" className="hover:text-foreground transition">
                            Items
                        </Link>

                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className=" md:inline-block px-4 py-2 rounded-lg bg-red-600 text-white hover:opacity-90 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link href="/login" className=" md:inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition">
                                Login
                            </Link>
                        )}

                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

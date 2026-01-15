import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Define all protected routes
  const protectedPaths = [
    '/add',                    // your add item page
    // add more if needed, e.g. '/profile', '/dashboard'
  ];

  // Check if current path starts with any protected path
  const isProtected = protectedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );

  // Also protect individual item details if you want (optional)
  const isItemDetail = pathname.startsWith('/items/') && pathname !== '/items';

  const isProtectedRoute = isProtected || isItemDetail;

  if (isProtectedRoute) {
    const isLoggedIn = request.cookies.get('isLoggedin')?.value === 'true';

    if (!isLoggedIn) {
      // Save where they wanted to go
      const returnUrl = encodeURIComponent(pathname + request.nextUrl.search);
      return NextResponse.redirect(
        new URL(`/login?returnUrl=${returnUrl}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/items/:path*',    // covers /items, /items/123, /items/abc
    '/add/:path*',      // covers /add and any subpaths if you add them later
  ],
};
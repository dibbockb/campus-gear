import { NextResponse } from 'next/server';

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  const protectedPaths = [
    '/add',                   
  ];

  const isProtected = protectedPaths.some(path =>
    pathname === path || pathname.startsWith(`${path}/`)
  );

  const isItemDetail = pathname.startsWith('/items/') && pathname !== '/items';

  const isProtectedRoute = isProtected || isItemDetail;

  if (isProtectedRoute) {
    const isLoggedIn = request.cookies.get('isLoggedin')?.value === 'true';

    if (!isLoggedIn) {
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
    '/items/:path*',   
    '/add/:path*',     
  ],
};
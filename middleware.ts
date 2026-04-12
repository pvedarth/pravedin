
import {type NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
  const {nextUrl, cookies} = request;
  const isAuthenticated = cookies.has('auth_token'); // Simplified check

  const protectedPaths = ['/blog', '/future-plans'];
  const isProtectedPath = protectedPaths.some((p) =>
    nextUrl.pathname.startsWith(p)
  );

  if (isProtectedPath && !isAuthenticated) {
    const absoluteURL = new URL('/sign-in', nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*', '/future-plans/:path*'],
};

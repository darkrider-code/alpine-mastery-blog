import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['sv', 'en', 'no', 'da', 'fi', 'de', 'fr', 'nl'] as const;
const DEFAULT_LOCALE = 'sv';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // Skip files with extensions (images, fonts, etc.)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If missing locale, redirect to /sv/
  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/sv${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal Next.js routes and static files
    '/((?!_next|api|static|.*\\..*).*)',
  ],
};

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'es', 'ca']

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language')
    if (!acceptLanguage) return 'en';

    const preferredLocales = acceptLanguage.split(',').map(l => l.split(';')[0]);

    for (const locale of preferredLocales) {
        if (locales.includes(locale)) {
            return locale;
        }
        // Check for generic language match (e.g., 'en' from 'en-US')
        const genericLocale = locale.split('-')[0];
        if (locales.includes(genericLocale)) {
            return genericLocale;
        }
    }

    return 'en'; // default
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|images|CV-Sergi-Mallen.pdf|FotoPerfil-sinBG.png).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}

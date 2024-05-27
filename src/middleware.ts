import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  localePrefix: "as-needed",
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/', '/(es|en)/:path*']
};
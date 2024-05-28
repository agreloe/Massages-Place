import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es', 'fr', 'de'],
  localePrefix: 'as-needed',
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/', '/(es|en|fr|de)/:path*']
};

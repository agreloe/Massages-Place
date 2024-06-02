import type { Metadata } from "next";
import '@/app/styles/globals.scss'
import Header from '@/app/components/Header';
import Footer from "@/app/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Favicon from '@/app/favicon.ico'
import Favicon32 from '@/app/favicon-32x32.png'
import Favicon16 from '@/app/favicon-16x16.png'
import AppleTouch from '@/app/apple-touch-icon.png'
import Android192 from '@/app/android-chrome-192x192.png'
import ServiceWorkerProvider from "@/app/components/ServiceWorkerProvider";

// eslint-disable-next-line
const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
const font = `font-family: monospace`
const signature = 'agreloe.dev'
console.log(littleCat,font,signature);

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Lugar de masajes',
  referrer: 'origin-when-cross-origin',
  keywords: ['Masajes', 'Compostela', 'Camino', 'Descontracturante'],
  authors: [{ name: 'Erika Agrelo', url: 'https://agreloe.dev' }],
  creator: 'Erika Agrelo',
  publisher: 'Erika Agrelo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: 'Lugar de masajes',
  description: 'Masajes en Santiago de Compostela: un santuario de paz y rejuvenecimiento, perfecto para aliviar tensiones.',
  metadataBase: new URL('https://masajescompostela.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/',
      'en': '/en',
      'de': '/de',
      'fr': '/fr',

    },
  },
  manifest: 'https://masajescompostela.com/manifest.json',
  openGraph: {
    title: 'Lugar de masajes',
    description: 'Masajes en Santiago de Compostela: un santuario de paz y rejuvenecimiento, perfecto para aliviar tensiones.',
    url: 'https://masajescompostela.com',
    siteName: 'Lugar de masajes',
    images: [
      {
        url: 'https://ik.imagekit.io/masajescompostela/masajes-compostela-meta-img.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://ik.imagekit.io/masajescompostela/masajes-compostela-meta-img.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Logo de Lugar de masajes',
      },
    ],
    locale: 'es',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    rel: 'icon',
    url: Favicon.src,
    icon: Favicon32.src,
    shortcut: Favicon16.src,
    apple: AppleTouch.src,
    other: {
      rel: 'android-chrome',
      url: Android192.src,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lugar de masajes',
    description: 'Masajes en Santiago de Compostela: un santuario de paz y rejuvenecimiento, perfecto para aliviar tensiones.',
    images: ['https://ik.imagekit.io/masajescompostela/masajes-compostela-meta-img.png'],
  },


}


export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="relative">
      <NextIntlClientProvider messages={messages}>
      <Header />
        {children}
        <Footer />
        </NextIntlClientProvider>
        <ServiceWorkerProvider></ServiceWorkerProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import '@/app/styles/globals.scss'
import Header from '@/app/components/Header';
import Footer from "@/app/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

// eslint-disable-next-line
const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
const font = `font-family: monospace`
const signature = 'agreloe.dev'
console.log(littleCat,font,signature);

export const metadata: Metadata = {
  title: "Masajes Compostela",
  description: "",
};


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

      </body>
    </html>
  );
}

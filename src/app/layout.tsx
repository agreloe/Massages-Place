import type { Metadata } from "next";
import '@/app/styles/globals.scss'
import Header from '@/app/components/Header';
import Footer from "@/app/components/Footer";


// eslint-disable-next-line
const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
const font = `font-family: monospace`
const signature = 'agreloe.dev'
console.log(littleCat,font,signature);

export const metadata: Metadata = {
  title: "Masajes Compostela",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

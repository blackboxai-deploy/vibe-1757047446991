import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Orbillee Kline Tomas - Professional Resume',
  description: 'Professional resume presentation for Orbillee Kline Tomas - Radiologic Technologist and Administrative Support Professional',
  keywords: 'resume, radiologic technologist, healthcare, administrative support, professional',
  authors: [{ name: 'Orbillee Kline Tomas' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
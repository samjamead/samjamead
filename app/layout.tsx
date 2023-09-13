import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { site_title } from '@/lib/constants';
import AppHeader from '@/_components/appHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: site_title,
  description: 'Thoughts / scrapbook since 2015',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='px-4'>
          <AppHeader />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

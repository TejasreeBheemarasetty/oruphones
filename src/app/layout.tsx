'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { trackUserActivity } from '../lib/tracker';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
        trackUserActivity('deals', false); // or true if logged in
        return () => {};
       }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
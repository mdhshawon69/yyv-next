/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Inter } from 'next/font/google';

import '@/style/globals.scss';
import { Navbar, Footer } from '@/shared/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YY Ventures | Incubation and investment Social Business company',
  description:
    'YY Ventures is an incubation and investment Social Business. We believe that a more equitable and just world is possible if we foster ‘Social Business’ while leveraging young people’s talents and ideas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

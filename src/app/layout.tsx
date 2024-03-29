import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import '../styles/globals.css';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Zurimpy',
    template: '%s | Zurimpy'
  },
  description: 'Zurimpy been desenvolved from braga'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

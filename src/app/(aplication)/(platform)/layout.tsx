import '@/styles/globals.css';
import { Sidebar } from '@/components/sidebar';

export default function PlatformLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      {children}
    </main>
  );
}

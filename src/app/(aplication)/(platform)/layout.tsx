import '@/styles/globals.css';
import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar/navbar';
import { getServerSession } from 'next-auth';

export default async function PlatformLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar session={session} />
        {children}
      </div>
    </main>
  );
}

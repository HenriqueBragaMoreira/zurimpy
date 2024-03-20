'use client';
import { ChevronLeft, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { routes } from '@/utils/pageRoutes';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import Link from 'next/link';
import { PlusDropdown } from './dropdowns/plusDropdown';
import { NotificationsDropdown } from './dropdowns/notificationsDropdown';
import { ProfileDropdown } from './dropdowns/profileDropdown';

export type SessionProps = {
  session: Session | null;
};

export function Navbar({ session }: SessionProps) {
  const pathName = usePathname();

  return (
    <div className="flex border-b border-gray-300 w-full items-center justify-around py-4">
      {routes
        .filter((route) => route.path === pathName)
        .map((item) => (
          <div className="flex gap-1 items-center" key={item.id}>
            {item.navName === 'Tasks Home' ? null : (
              <Link href="/home">
                <ChevronLeft size={20} strokeWidth={3} className="text-gray-600" />
              </Link>
            )}
            <div className="font-medium text-gray-500 text-base">{item.navName}</div>
          </div>
        ))}
      <div className="flex items-center w-96">
        <Search color="gray" className="relative -right-7" />
        <Input className="bg-gray-200 pl-8" placeholder="Search..." />
      </div>
      <div className="flex gap-8 items-center">
        <PlusDropdown />
        <NotificationsDropdown />
        <ProfileDropdown session={session} />
      </div>
    </div>
  );
}

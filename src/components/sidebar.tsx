'use client';
import { routes } from '@/utils/pageRoutes';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import logo from '../../public/logoZurimpy.png';
import Link from 'next/link';

export function Sidebar() {
  const route = useRouter();
  const current = usePathname();

  return (
    <div className="flex flex-col items-center py-4 px-4 bg-gray-200 w-64 gap-10">
      <Link href="/home" className="flex gap-2 items-center">
        <Image src={logo} alt="logo" height={50} width={50} />
        <h1 className="font-bold text-2xl">Zurimpy</h1>
      </Link>
      <div className="w-full flex flex-col gap-4">
        {routes.map((item) => (
          <div
            onClick={() => route.push(item.path)}
            className={`flex gap-4 hover:bg-gray-400 font-semibold py-2 px-3 rounded-md items-center cursor-pointer ${item.path === current ? 'bg-gray-400 text-black' : 'text-gray-500'}`}
            key={item.id}
          >
            <span>
              <item.icon />
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

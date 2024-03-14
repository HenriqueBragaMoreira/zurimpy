'use client';
import { routes } from '@/utils/routes';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export function Sidebar() {
  const [active, setActive] = useState(usePathname());
  const route = useRouter();

  function handlePush(path: string) {
    route.push(path);
    setActive(path);
  }

  return (
    <div className="flex flex-col items-center py-4 px-4 bg-gray-200 w-64 gap-10">
      <h1 className="font-bold text-2xl">Zurimpy</h1>
      <div className="w-full flex flex-col gap-4">
        {routes.map((item) => (
          <div
            onClick={() => handlePush(item.path)}
            className={`flex gap-4 hover:bg-gray-300 font-semibold py-2 px-3 rounded-md items-center cursor-pointer ${item.path === active ? 'bg-gray-300 text-black' : 'text-gray-400'}`}
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

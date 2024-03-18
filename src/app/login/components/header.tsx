import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '@/../public/logoZurimpy.png';

export function Header() {
  return (
    <div className="flex justify-between">
      <a href="/login" className="flex gap-2 items-center">
        <Image src={logo} alt="Logo da empresa Zurimpy" width={40} height={40} />
        <h1 className="font-bold text-xl">Zurimpy</h1>
      </a>
      <div className="flex gap-4">
        <Button className="bg-gray-100 hover:bg-gray-300 text-black">Explore Features</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

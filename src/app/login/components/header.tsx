import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-xl">Zurimpy</h1>
      <div className="flex gap-4">
        <Button className="bg-gray-100 hover:bg-gray-300 text-black">Explore Features</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

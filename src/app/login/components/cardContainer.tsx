'use client';
import { useRouter } from 'next/navigation';

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  link?: string;
  url?: string;
  children: React.ReactNode;
};

export function CardContainer({ icon, title, subtitle, children, link, url = '/' }: CardProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-6 border border-gray-200 w-[450px] rounded-lg p-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-purple-400 rounded-full p-3">{icon}</div>
        <h1 className="font-semibold text-2xl">{title}</h1>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-500">{subtitle}</p>
          <p
            className="text-sm text-purple-500 hover:underline cursor-pointer"
            onClick={() => router.push(url)}
          >
            {link}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}

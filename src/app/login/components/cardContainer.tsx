import { Dispatch, SetStateAction } from 'react';

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  link?: string;
  type?: string;
  setShowForm: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
};

export function CardContainer({
  icon,
  title,
  subtitle,
  children,
  link,
  type = '',
  setShowForm
}: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border border-gray-200 w-[450px] rounded-lg p-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-purple-400 rounded-full p-3">{icon}</div>
        <h1 className="font-semibold text-2xl">{title}</h1>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-500">{subtitle}</p>
          <p
            className="text-sm text-purple-500 hover:underline cursor-pointer"
            onClick={() => setShowForm(type)}
          >
            {link}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}

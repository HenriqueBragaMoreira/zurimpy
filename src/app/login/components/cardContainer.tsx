type CardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function CardContainer({ icon, title, subtitle, children }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border border-gray-200 w-[450px] rounded-lg p-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-purple-400 rounded-full p-3">{icon}</div>
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

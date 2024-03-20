import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="px-4 py-4">
      <h1>Home {session?.user?.name}</h1>
    </div>
  );
}

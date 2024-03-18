import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <h1>Home {session?.user?.name}</h1>
    </div>
  );
}

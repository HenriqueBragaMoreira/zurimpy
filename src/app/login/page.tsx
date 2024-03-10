import { Metadata } from 'next';
import { MainContainer } from './components/mainContainer';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className="px-8 py-4">
      <MainContainer />
      <h1 className="font-bold text-lg mt-10">LOGIN</h1>
    </div>
  );
}

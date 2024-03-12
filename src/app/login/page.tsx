import { Metadata } from 'next';
import { MainContainer } from './components/mainContainer';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div>
      <MainContainer />
    </div>
  );
}

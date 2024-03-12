import { Smile } from 'lucide-react';
import { CardContainer } from './cardContainer';
import { Header } from './header';
import { Button } from '@/components/ui/button';
import { LoginForm } from './form/loginForm';

export function MainContainer() {
  return (
    <div className="px-8 py-4">
      <Header />
      <div className="h-screen flex flex-col justify-center items-center">
        <CardContainer
          icon={<Smile size={50} color="white" />}
          title="Sign in to Zurimpy"
          subtitle="Dont have an account ?"
          link="Sign up"
          url="/teste"
        >
          <div className="flex flex-col w-full gap-4">
            <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
              Sign up with Google
            </Button>
            <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
              Sign up with Facebook
            </Button>
          </div>
          <div className="relative w-full h-[1px] bg-gray-400">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2.5 text-gray-600">
              OR
            </span>
          </div>
          <LoginForm />
        </CardContainer>
        <h1 className="font-semibold text-sm text-gray-500 mt-10">© Zurimpy page</h1>
      </div>
    </div>
  );
}

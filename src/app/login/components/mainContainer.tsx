'use client';
import { Lock, Smile } from 'lucide-react';
import { CardContainer } from '../../../components/cardContainer';
import { Header } from './header';
import { Button } from '@/components/ui/button';
import { LoginForm } from './form/loginForm';
import { useState } from 'react';
import { CreateAccountForm } from './form/createAccountForm';

export function MainContainer() {
  const [showForm, setShowForm] = useState('login');

  return (
    <div className="flex flex-col gap-10 px-8 py-4">
      <Header />
      <div className="flex flex-col justify-center items-center">
        {showForm === 'login' ? (
          <CardContainer
            icon={<Smile size={50} color="white" />}
            title="Sign in to Zurimpy"
            subtitle="Don't have an account ?"
            link="Sign up"
            type="createAccount"
            setShowForm={setShowForm}
          >
            <div className="flex flex-col w-full gap-4">
              <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
                Sign in with Google
              </Button>
              <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
                Sign in with Github
              </Button>
            </div>
            <div className="relative w-full h-[1px] bg-gray-400">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2.5 text-gray-600">
                OR
              </span>
            </div>
            <LoginForm />
            <p
              className="text-sm text-gray-500 hover:underline cursor-pointer"
              onClick={() => setShowForm('forgotPassword')}
            >
              Forgot your password ?
            </p>
          </CardContainer>
        ) : showForm === 'createAccount' ? (
          <CardContainer
            icon={<Smile size={50} color="white" />}
            title="Sign up to Zurimpy"
            subtitle="Already have an account ?"
            setShowForm={setShowForm}
            link="Login"
            type="login"
          >
            <div className="flex flex-col w-full gap-4">
              <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
                Sign in with Google
              </Button>
              <Button className="bg-white text-black border border-gray-400 hover:bg-gray-100">
                Sign in with Github
              </Button>
            </div>
            <div className="relative w-full h-[1px] bg-gray-400">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2.5 text-gray-600">
                OR
              </span>
            </div>
            <CreateAccountForm />
          </CardContainer>
        ) : (
          <CardContainer
            icon={<Lock size={50} color="white" />}
            title="Forgot Password ?"
            subtitle="We'll send new password link to email"
            setShowForm={setShowForm}
          >
            FORGOT PASSWORD
          </CardContainer>
        )}

        <h1 className="font-semibold text-sm text-gray-500 mt-10">© Zurimpy page</h1>
      </div>
    </div>
  );
}

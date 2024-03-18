import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { env } from '@/constants/env.mjs';

export const options: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text'
        },
        password: {
          label: 'Password:',
          type: 'password'
        }
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'braga@anjunexpress.com', password: 'nextauth' };

        if (credentials?.email === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
};

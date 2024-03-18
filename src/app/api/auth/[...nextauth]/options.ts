import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
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

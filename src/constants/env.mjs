import { z } from 'zod';

import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  client: {
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GITHUB_SECRET: z.string(),
    GITHUB_ID: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string()
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  }
});

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/home', '/dashboard', '/teams', '/boards', '/inbox', '/timeline', '/moreOptions']
};

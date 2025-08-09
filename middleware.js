import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// Re-enable NextAuth middleware for proper session management
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/auth/signin',
    },
  }
);

export const config = {
  matcher: [
    '/history',
    '/dashboard',
    '/check-interactions',
    '/check-suitability',
    '/profile/:path*',
    '/settings/:path*',
    '/api/user/:path*',
  ],
};
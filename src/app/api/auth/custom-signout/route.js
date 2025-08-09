import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Get all cookies
    const cookieStore = cookies();
    
    // Create response
    const response = NextResponse.json({ success: true, message: 'Signed out successfully' });
    
    // Clear NextAuth cookies manually
    const cookiesToClear = [
      'next-auth.session-token',
      'next-auth.csrf-token',
      'next-auth.callback-url',
      '__Secure-next-auth.session-token',
      '__Host-next-auth.csrf-token',
      'next-auth.pkce.code_verifier'
    ];
    
    cookiesToClear.forEach(cookieName => {
      response.cookies.set(cookieName, '', {
        expires: new Date(0),
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
    });
    
    return response;
  } catch (error) {
    console.error('Custom signout error:', error);
    return NextResponse.json({ success: false, error: 'Sign out failed' }, { status: 500 });
  }
}

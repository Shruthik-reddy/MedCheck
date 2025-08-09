import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Simple success response
    return NextResponse.json({ success: true, message: 'Signed out successfully' });
  } catch (error) {
    console.error('Sign out error:', error);
    return NextResponse.json({ success: false, error: 'Sign out failed' }, { status: 500 });
  }
}
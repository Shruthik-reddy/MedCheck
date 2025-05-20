import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    // Log the incoming request
    console.log('Reset password request received');

    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('Request body:', body);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { token, password } = body;

    // Validate required fields
    if (!token || !password) {
      console.log('Missing required fields:', { token: !!token, password: !!password });
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      );
    }

    // Connect to database
    try {
      await dbConnect();
      console.log('Database connected successfully');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Find user with valid token
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      console.log('No user found with valid token');
      return NextResponse.json(
        { error: 'Invalid or expired reset token. Please request a new password reset.' },
        { status: 400 }
      );
    }

    console.log('Found user:', user.email);

    // Update user password
    try {
      user.password = password;
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;
      await user.save();
      console.log('Password updated successfully');
    } catch (saveError) {
      console.error('Failed to save user:', saveError);
      return NextResponse.json(
        { error: 'Failed to update password' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Password reset successful. Please sign in with your new password.' 
    });
  } catch (error) {
    console.error('Unexpected error in reset password:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}
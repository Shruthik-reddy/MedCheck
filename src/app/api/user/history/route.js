import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/db/mongodb';
import User from '@/models/User';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request) {
  try {
    // Get the session
    const session = await getServerSession(authOptions);
    console.log('Full session:', session);
    console.log('Session user:', session?.user);

    // Check if user is authenticated
    if (!session) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    await dbConnect();
    console.log('Database connected');

    // Try finding user by ID first
    console.log('Looking up user by ID:', session.user.id);
    let user = await User.findById(session.user.id).select('history').lean();
    
    // If not found by ID, try email
    if (!user) {
      console.log('User not found by ID, trying email:', session.user.email);
      user = await User.findOne({ email: session.user.email }).select('history').lean();
    }

    console.log('User found:', user ? 'yes' : 'no');
    if (user) {
      console.log('User history:', JSON.stringify(user.history, null, 2));
    }

    if (!user) {
      console.log('User not found with either ID or email');
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Sort history by date in descending order
    const sortedHistory = user.history ? [...user.history].sort((a, b) => b.date - a.date) : [];
    console.log('Sorted history:', JSON.stringify(sortedHistory, null, 2));

    // Return the history array (or empty array if no history)
    return NextResponse.json({ 
      history: sortedHistory,
      message: 'History retrieved successfully' 
    });

  } catch (error) {
    console.error('History fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch history' }, 
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/db/mongodb';
import User from '@/models/User';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    let user = await User.findById(session.user.id).select('history').lean();
    
    if (!user) {
      user = await User.findOne({ email: session.user.email }).select('history').lean();
    }

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const sortedHistory = user.history ? [...user.history].sort((a, b) => b.date - a.date) : [];

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
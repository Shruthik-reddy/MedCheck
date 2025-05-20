import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URI format check:', process.env.MONGODB_URI?.includes('mongodb+srv://'));
    await dbConnect();
    return NextResponse.json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    console.error('Detailed MongoDB connection error:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { 
        error: "Failed to connect to MongoDB", 
        details: error.message,
        name: error.name,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
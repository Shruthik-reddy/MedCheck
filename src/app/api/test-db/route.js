import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        error: "Failed to connect to MongoDB", 
        details: error.message
      },
      { status: 500 }
    );
  }
}
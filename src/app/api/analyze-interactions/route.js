import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/db/mongodb';
import User from '@/models/User';

async function queryLlama(prompt) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "llama3.2",  // Updated to match installed model
      prompt: prompt,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Raw Llama response:', data.response); // Debug log

  // Try to extract JSON from the response
  try {
    const jsonMatch = data.response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    const jsonResponse = JSON.parse(jsonMatch[0]);
    console.log('Parsed JSON:', jsonResponse); // Debug log
    return jsonResponse;
  } catch (error) {
    console.error('JSON parsing error:', error);
    throw new Error('Failed to parse Llama response as JSON');
  }
}

export async function POST(request) {
  try {
    console.log('Starting interaction analysis...'); // Debug log

    // Check authentication
    const session = await getServerSession();
    if (!session) {
      console.log('Unauthorized: No session found'); // Debug log
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    await dbConnect();
    console.log('Connected to database'); // Debug log

    // Get request body
    const { medications, conditions } = await request.json();
    console.log('Request data:', { medications, conditions }); // Debug log

    // Validate input
    if (!medications || medications.length < 2) {
      return NextResponse.json(
        { error: 'At least two medications are required' },
        { status: 400 }
      );
    }

    // Filter out empty values
    const validMedications = medications.filter(med => med.trim() !== '');
    const validConditions = conditions ? conditions.filter(cond => cond.trim() !== '') : [];

    // Prepare prompt
    const prompt = `
      You are a medical AI assistant. Analyze the interactions between these medications:
      ${validMedications.join(', ')}
      ${validConditions.length > 0 ? `\nConsidering these conditions: ${validConditions.join(', ')}` : ''}

      Provide your response in this exact JSON format:
      {
        "interactions": [
          {
            "medications": ["drug1", "drug2"],
            "severity": "high|medium|low",
            "description": "Description of the interaction",
            "recommendations": ["recommendation1", "recommendation2"]
          }
        ],
        "overallAssessment": "Overall assessment of all interactions",
        "alternativeOptions": ["alternative1", "alternative2"],
        "precautions": ["precaution1", "precaution2"]
      }

      Important: Your entire response must be valid JSON that matches this exact structure.
    `;

    console.log('Sending prompt to Llama...'); // Debug log

    // Get response from Llama
    const response = await queryLlama(prompt);
    console.log('Got response from Llama'); // Debug log

    // Save to user's history
    console.log('Attempting to find user with ID:', session.user.id);
    let user = await User.findById(session.user.id);
    
    // If not found by ID, try email
    if (!user) {
      console.log('User not found by ID, trying email:', session.user.email);
      user = await User.findOne({ email: session.user.email });
    }
    
    console.log('User found:', user ? 'yes' : 'no');
    
    if (user) {
      console.log('Current user history:', user.history);
      const historyEntry = {
        type: 'interaction',
        details: {
          medications: validMedications,
          conditions: validConditions,
          results: response
        },
        date: new Date()
      };
      console.log('Adding history entry:', JSON.stringify(historyEntry, null, 2));
      user.history.push(historyEntry);
      try {
        await user.save();
        console.log('History saved successfully');
        console.log('Updated user history:', user.history);
      } catch (saveError) {
        console.error('Error saving history:', saveError);
      }
    } else {
      console.log('User not found with either ID or email');
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in analyze-interactions:', error);
    return NextResponse.json(
      { 
        error: 'Failed to analyze interactions',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }, 
      { status: 500 }
    );
  }
}
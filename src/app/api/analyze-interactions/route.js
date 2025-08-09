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
      model: "llama3.2",
      prompt: prompt,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Raw Llama response:', data.response);

  try {
    const jsonMatch = data.response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    const jsonResponse = JSON.parse(jsonMatch[0]);
    console.log('Parsed JSON:', jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error('JSON parsing error:', error);
    throw new Error('Failed to parse Llama response as JSON');
  }
}

export async function POST(request) {
  try {
    console.log('Starting interaction analysis...');

    const session = await getServerSession();
    if (!session) {
      console.log('Unauthorized: No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    console.log('Connected to database');

    const { medications, conditions } = await request.json();
    console.log('Request data:', { medications, conditions });

    if (!medications || medications.length < 2) {
      return NextResponse.json(
        { error: 'At least two medications are required' },
        { status: 400 }
      );
    }

    const validMedications = medications.filter(med => med.trim() !== '');
    const validConditions = conditions ? conditions.filter(cond => cond.trim() !== '') : [];

    const prompt = `
      You are a medical AI assistant. Analyze the interactions between these medications:
      
      Medications: ${validMedications.join(', ')}
      ${validConditions.length > 0 ? `Medical Conditions: ${validConditions.join(', ')}` : ''}

      Provide your response in this exact JSON format:
      {
        "hasInteraction": boolean,
        "severity": "none" | "low" | "moderate" | "high",
        "effects": "detailed explanation of findings, including safety information in 2 to 3 sentences",
        "alternatives": ["alternative1", "alternative2"] or [] if no alternatives needed,
        "recommendations": ["recommendation1", "recommendation2"],
        "overallAssessment": "short overall assessment of the result in single sentence"
      }

      Important: Your entire response must be valid JSON that matches this exact structure.
    `;

    console.log('Sending prompt to Llama...');

    const response = await queryLlama(prompt);
    console.log('Got response from Llama');

    console.log('Attempting to find user with ID:', session.user.id);
    let user = await User.findById(session.user.id);
    
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
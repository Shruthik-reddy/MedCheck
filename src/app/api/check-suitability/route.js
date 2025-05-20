import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/db/mongodb';
import User from '@/models/User';

async function queryOllama(prompt, systemPrompt = '') {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt,
        stream: false,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Extract JSON from the response
    const jsonMatch = data.response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in response');
    }
    
    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('Ollama API Error:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    console.log('Starting medication suitability check...'); // Debug log

    // Check authentication
    const session = await getServerSession();
    console.log('Full session:', session); // Log the entire session
    if (!session) {
      console.log('Unauthorized: No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    await dbConnect();
    console.log('Connected to database');

    // Get request body
    const { medication, conditions, symptoms, allergies, currentMedications } = await request.json();
    console.log('Request data:', { medication, conditions, symptoms, allergies, currentMedications });

    // Validate input
    if (!medication || !conditions || conditions.length === 0) {
      return NextResponse.json(
        { error: 'Medication and at least one condition are required' },
        { status: 400 }
      );
    }

    // Filter out empty values
    const validConditions = conditions.filter(cond => cond.trim() !== '');
    const validCurrentMeds = currentMedications ? currentMedications.filter(med => med.trim() !== '') : [];

    // Prepare prompt
    const systemPrompt = `You are a medical AI assistant specializing in medication suitability and safety. Provide thorough, evidence-based assessments while maintaining clear and understandable explanations.`;

    const prompt = `
      Analyze the suitability of the following medication:
      
      Medication to Check: ${medication}
      Medical Conditions: ${validConditions.join(', ')}
      ${symptoms ? `Current Symptoms: ${symptoms}` : ''}
      ${allergies ? `Allergies: ${allergies}` : ''}
      ${validCurrentMeds.length > 0 ? `Current Medications: ${validCurrentMeds.join(', ')}` : ''}

      Provide your response in this exact JSON format:
      {
        "suitable": boolean,
        "suitabilityScore": number (0-100),
        "concerns": ["concern1", "concern2"] or [] if no concerns,
        "alternatives": ["alternative1", "alternative2"] or [] if no alternatives needed,
        "recommendations": ["recommendation1", "recommendation2"],
        "explanation": "detailed explanation of the assessment"
      }

      Important: Your entire response must be valid JSON that matches this exact structure.
      Consider:
      - Effectiveness for the conditions
      - Potential contraindications
      - Impact of any allergies
      - Interaction with current medications
      - Relevance to current symptoms
    `;

    // Get response from Llama
    const response = await queryOllama(prompt, systemPrompt);
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
        type: 'suitability',
        details: {
          medication: medication,
          conditions: validConditions,
          symptoms: symptoms,
          allergies: allergies,
          currentMedications: validCurrentMeds,
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
    console.error('Error in check-suitability:', error);
    return NextResponse.json(
      { 
        error: 'Failed to check medication suitability',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }, 
      { status: 500 }
    );
  }
}
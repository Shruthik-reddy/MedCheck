'use client';

import { useState } from 'react';
import RequireAuth from '@/components/auth/RequireAuth';

export default function DrugInteractionsPage() {
  const [medications, setMedications] = useState(['', '']);
  const [conditions, setConditions] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const addMedication = () => {
    setMedications([...medications, '']);
  };

  const removeMedication = (index) => {
    const newMedications = medications.filter((_, i) => i !== index);
    setMedications(newMedications);
  };

  const updateMedication = (index, value) => {
    const newMedications = [...medications];
    newMedications[index] = value;
    setMedications(newMedications);
  };

  const addCondition = () => {
    setConditions([...conditions, '']);
  };

  const removeCondition = (index) => {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
  };

  const updateCondition = (index, value) => {
    const newConditions = [...conditions];
    newConditions[index] = value;
    setConditions(newConditions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const validMedications = medications.filter(med => med.trim() !== '');
    if (validMedications.length < 2) {
      setError('Please enter at least two medications');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/analyze-interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          medications: validMedications,
          conditions: conditions.filter(cond => cond.trim() !== '')
        })
      });

      if (!response.ok) {
        throw new Error('Failed to analyze interactions');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <RequireAuth>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Drug Interaction Checker</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Medications</h2>
            {medications.map((medication, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={medication}
                  onChange={(e) => updateMedication(index, e.target.value)}
                  placeholder="Enter medication name"
                  className="flex-1 p-2 border rounded"
                />
                {medications.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeMedication(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addMedication}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Medication
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Medical Conditions (Optional)</h2>
            {conditions.map((condition, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={condition}
                  onChange={(e) => updateCondition(index, e.target.value)}
                  placeholder="Enter medical condition"
                  className="flex-1 p-2 border rounded"
                />
                {conditions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCondition(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addCondition}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Condition
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 ${
              loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
            } text-white rounded`}
          >
            {loading ? 'Analyzing...' : 'Check Interactions'}
          </button>
        </form>

        {results && (
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold">Results</h2>
            
            <div className="space-y-4">
              {results.interactions.map((interaction, index) => (
                <div key={index} className="p-4 bg-white shadow rounded">
                  <h3 className="font-semibold">
                    {interaction.medications.join(' + ')}
                  </h3>
                  <p className={`font-medium ${getSeverityColor(interaction.severity)}`}>
                    Severity: {interaction.severity}
                  </p>
                  <p className="mt-2">{interaction.description}</p>
                  {interaction.recommendations.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium">Recommendations:</h4>
                      <ul className="list-disc pl-5">
                        {interaction.recommendations.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold">Overall Assessment</h3>
              <p className="mt-2">{results.overallAssessment}</p>
            </div>

            {results.alternativeOptions.length > 0 && (
              <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Alternative Options</h3>
                <ul className="list-disc pl-5 mt-2">
                  {results.alternativeOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            {results.precautions.length > 0 && (
              <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Precautions</h3>
                <ul className="list-disc pl-5 mt-2">
                  {results.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 p-4 bg-yellow-50 text-yellow-800 rounded">
          <p className="font-medium">Medical Disclaimer</p>
          <p className="mt-2">
            This tool is for informational purposes only. Always consult with a qualified healthcare 
            provider about your medications and medical conditions. The information provided should not 
            be used as a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </RequireAuth>
  );
}
'use client';
import RequireAuth from '@/components/auth/RequireAuth';
import { useState } from 'react';

export default function CheckSuitability() {
  const [medication, setMedication] = useState('');
  const [conditions, setConditions] = useState(['']);
  const [currentMedications, setCurrentMedications] = useState(['']);
  const [symptoms, setSymptoms] = useState('');
  const [allergies, setAllergies] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  // Condition handlers
  const addCondition = () => {
    setConditions([...conditions, '']);
  };

  const updateCondition = (index, value) => {
    const updatedConditions = [...conditions];
    updatedConditions[index] = value;
    setConditions(updatedConditions);
  };

  const removeCondition = (index) => {
    const updatedConditions = conditions.filter((_, i) => i !== index);
    setConditions(updatedConditions);
  };

  // Current medication handlers
  const addCurrentMedication = () => {
    setCurrentMedications([...currentMedications, '']);
  };

  const updateCurrentMedication = (index, value) => {
    const updatedMeds = [...currentMedications];
    updatedMeds[index] = value;
    setCurrentMedications(updatedMeds);
  };

  const removeCurrentMedication = (index) => {
    const updatedMeds = currentMedications.filter((_, i) => i !== index);
    setCurrentMedications(updatedMeds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Filter out empty values
      const validConditions = conditions.filter(cond => cond.trim() !== '');
      const validMedications = currentMedications.filter(med => med.trim() !== '');

      if (!medication.trim()) {
        throw new Error('Please enter a medication to check');
      }

      if (validConditions.length === 0) {
        throw new Error('Please enter at least one medical condition');
      }

      const response = await fetch('/api/check-suitability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          medication: medication.trim(),
          conditions: validConditions,
          currentMedications: validMedications,
          symptoms: symptoms.trim(),
          allergies: allergies.trim()
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to check medication suitability');
      }

      const result = await response.json();
      setResults(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

    return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Check Medication Suitability
            </h1>
            <p className="text-gray-600">
              Enter your medical conditions and the medication you're considering to check its suitability.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Input Form */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Medication to Check */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medication to Check
                  </label>
                  <input
                    type="text"
                    value={medication}
                    onChange={(e) => setMedication(e.target.value)}
                    placeholder="Enter medication name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Medical Conditions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Conditions
                  </label>
                  <div className="space-y-2">
                    {conditions.map((condition, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={condition}
                          onChange={(e) => updateCondition(index, e.target.value)}
                          placeholder="Enter medical condition"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                        {conditions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCondition(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addCondition}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      + Add another condition
                    </button>
                  </div>
                </div>

                {/* Current Medications */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Medications (if any)
                  </label>
                  <div className="space-y-2">
                    {currentMedications.map((med, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={med}
                          onChange={(e) => updateCurrentMedication(index, e.target.value)}
                          placeholder="Enter medication name"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {currentMedications.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCurrentMedication(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addCurrentMedication}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      + Add another medication
                    </button>
                  </div>
                </div>

                {/* Symptoms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Symptoms (Optional)
                  </label>
                  <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe your current symptoms"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Allergies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Allergies (Optional)
                  </label>
                  <textarea
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="List any known allergies"
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {loading ? 'Checking Suitability...' : 'Check Suitability'}
                </button>
              </form>
            </div>

            {/* Results Section */}
            {results && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Suitability Analysis</h2>
                <div className="space-y-6">
                  {/* Suitability Score */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Suitability Score:</span>
                    <span className={`text-lg font-bold ${
                      results.suitabilityScore >= 80 ? 'text-green-600' :
                      results.suitabilityScore >= 60 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {results.suitabilityScore}%
                    </span>
                  </div>

                  {/* Overall Assessment */}
                  <div className={`p-4 rounded-lg ${
                    results.suitabilityScore >= 80 ? 'bg-green-50 border border-green-200' :
                    results.suitabilityScore >= 60 ? 'bg-yellow-50 border border-yellow-200' :
                    'bg-red-50 border border-red-200'
                  }`}>
                    <h3 className="font-medium mb-2">Overall Assessment</h3>
                    <p className="text-gray-700">{results.explanation}</p>
                  </div>

                  {/* Important Considerations */}
                  {results.considerations && results.considerations.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Important Considerations
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {results.considerations.map((consideration, index) => (
                          <li key={index}>{consideration}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Alternative Options */}
                  {results.alternatives && results.alternatives.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Alternative Options
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {results.alternatives.map((alternative, index) => (
                          <li key={index}>{alternative}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommendations */}
                  {results.recommendations && results.recommendations.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Recommendations
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {results.recommendations.map((recommendation, index) => (
                          <li key={index}>{recommendation}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="mt-6 text-sm text-gray-500">
                    <p>
                      Note: This analysis is for reference only. Always consult with a healthcare 
                      professional before making any decisions about medication.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </RequireAuth>
  );
  }
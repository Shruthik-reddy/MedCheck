'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function History() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

    if (status === 'authenticated') {
      fetchHistory();
    }
  }, [status, router]);

  const fetchHistory = async () => {
    try {
      console.log('Fetching history...');
      const response = await fetch('/api/user/history');
      console.log('History response status:', response.status);
      if (!response.ok) {
        throw new Error('Failed to fetch history');
      }
      const data = await response.json();
      console.log('History data received:', data);
      setHistory(data.history || []);
    } catch (err) {
      console.error('Error fetching history:', err);
      setError('Failed to load history');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Check History</h1>
          <p className="mt-2 text-gray-600">
            View your past medication checks and interactions
          </p>
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No history found. Start by checking some medications!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {history.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.type === 'interaction' ? 'Drug Interaction Check' : 'Medication Suitability Check'}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleString()}
                    </p>
                    {item.details && (
                      <div className="mt-2">
                        {item.type === 'interaction' ? (
                          <>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Medications checked: </span>
                              {item.details.medications?.join(', ')}
                            </p>
                            {item.details.severity && (
                              <p className="text-sm text-gray-600 mt-1">
                                <span className="font-medium">Severity: </span>
                                <span className={`
                                  ${item.details.severity === 'high' ? 'text-red-600' : ''}
                                  ${item.details.severity === 'moderate' ? 'text-yellow-600' : ''}
                                  ${item.details.severity === 'low' ? 'text-blue-600' : ''}
                                  ${item.details.severity === 'none' ? 'text-green-600' : ''}
                                `}>
                                  {item.details.severity.charAt(0).toUpperCase() + item.details.severity.slice(1)}
                                </span>
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Medication: </span>
                              {item.details.medication}
                            </p>
                            {item.details.conditions && (
                              <p className="text-sm text-gray-600 mt-1">
                                <span className="font-medium">Conditions: </span>
                                {item.details.conditions.join(', ')}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
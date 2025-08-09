'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [recentHistory, setRecentHistory] = useState([]);

  useEffect(() => {
    if (session?.user) {
      fetch('/api/user/history')
        .then(res => res.json())
        .then(data => {
          if (data.history) {
            setRecentHistory(data.history);
          }
        })
        .catch(error => console.error('Error fetching history:', error));
    }
  }, [session]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome, {session.user.name || session.user.email}!
          </h1>
          <p className="text-xl text-gray-600">
            What would you like to do today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Drug Interactions Card */}
          <Link href="/check-interactions" className="block">
            <div className="h-full bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src="/images/check-interactions.png"
                    alt="Check Drug Interactions"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  Check Drug Interactions
                </h2>
                <p className="text-gray-600">
                  Analyze potential interactions between multiple medications.
                </p>
              </div>
            </div>
          </Link>

          {/* Medication Suitability Card */}
          <Link href="/check-suitability" className="block">
            <div className="h-full bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src="/images/check-suitability.png"
                    alt="Check Medication Suitability"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Check Medication Suitability
                </h2>
                <p className="text-gray-600">
                  Verify if a medication is suitable for your conditions.
                </p>
              </div>
            </div>
          </Link>

          {/* History Card */}
          <Link href="/history" className="block">
            <div className="h-full bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src="/images/history.png"
                    alt="View History"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-purple-600 mb-4">
                  View History
                </h2>
                <p className="text-gray-600">
                  Access your past medication checks and interactions.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {recentHistory.length > 0 ? (
              <div className="space-y-4">
                {recentHistory.map((item, index) => (
                  <div key={index} className="border-b last:border-0 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.type === 'interaction' ? 'Drug Interaction Check' : 'Medication Suitability Check'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </p>
                        {item.details && (
                          <p className="text-sm text-gray-600 mt-1">
                            {item.type === 'interaction' 
                              ? `Checked: ${item.details.medications?.join(', ')}` 
                              : `Medication: ${item.details.medication}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center">
                No recent activity found. Start by checking some medications!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

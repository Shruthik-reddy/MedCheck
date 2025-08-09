'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function About() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect signed-in users to dashboard
    if (status === 'authenticated' && session) {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About MedCheck
            </h1>
            <p className="text-xl mb-8">
              Your trusted AI-powered companion for medication safety and drug interaction checking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                To empower patients and healthcare professionals with advanced AI technology 
                that ensures medication safety and prevents dangerous drug interactions.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">🔍 Drug Interaction Analysis</h3>
                  <p className="text-gray-700">
                    Our advanced AI analyzes potential interactions between multiple medications, 
                    providing real-time safety assessments and risk evaluations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">✅ Medication Suitability</h3>
                  <p className="text-gray-700">
                    We verify if medications are suitable for specific conditions, allergies, 
                    and patient profiles to ensure safe prescribing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">💡 Smart Recommendations</h3>
                  <p className="text-gray-700">
                    When interactions or contraindications are found, our AI suggests 
                    safer alternative medications and treatment options.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">📊 Comprehensive Reports</h3>
                  <p className="text-gray-700">
                    Detailed analysis reports help healthcare providers make informed 
                    decisions about patient medication regimens.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Why Choose MedCheck?</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>AI-Powered Accuracy:</strong> Our machine learning algorithms are trained on 
                      extensive medical databases for precise interaction detection.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Real-Time Analysis:</strong> Get instant results without waiting, 
                      enabling quick decision-making in critical situations.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>User-Friendly Interface:</strong> Simple, intuitive design that 
                      healthcare professionals and patients can use with ease.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Comprehensive Database:</strong> Access to extensive medication 
                      information and interaction data from trusted medical sources.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <strong>Privacy & Security:</strong> Your medical information is protected 
                      with enterprise-grade security and privacy measures.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="text-lg text-gray-700 mb-6">
                  MedCheck is developed by a team of experienced healthcare professionals, 
                  AI researchers, and software engineers dedicated to improving medication safety.
                </p>
                <p className="text-gray-600">
                  Our multidisciplinary approach ensures that our technology meets the highest 
                  standards of medical accuracy and user experience.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands of healthcare professionals and patients who trust MedCheck 
                for their medication safety needs.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="/auth/signup" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Create Free Account
                </a>
                <a 
                  href="/auth/signin" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered Drug Safety Check
              </h1>
              <p className="text-xl mb-8">
                Make informed decisions about your medications with advanced AI technology.
                Check drug interactions and verify medication suitability instantly.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="/auth/signup" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </a>
                <a 
                  href="#features" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Drug Interaction Check"
                description="Instantly analyze potential interactions between multiple medications using advanced AI technology."
                icon="🔍"
              />
              <FeatureCard
                title="Medication Suitability"
                description="Verify if a medication is suitable for your specific conditions and get personalized recommendations."
                icon="✓"
              />
              <FeatureCard
                title="Smart Alternatives"
                description="Receive AI-powered suggestions for alternative medications when interactions or unsuitable matches are found."
                icon="💡"
              />
            </div>
          </div>
        </section>
  
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StepCard
                number="1"
                title="Enter Medications"
                description="Input your current medications or the drug you want to check."
              />
              <StepCard
                number="2"
                title="AI Analysis"
                description="Our AI system analyzes potential interactions and suitability."
              />
              <StepCard
                number="3"
                title="Get Results"
                description="Receive detailed results and recommendations instantly."
              />
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                Our AI-powered platform helps healthcare professionals and patients make
                informed decisions about medication safety. We use advanced artificial
                intelligence to analyze drug interactions and assess medication suitability.
              </p>
              <p className="text-gray-600">
                With real-time analysis and comprehensive medication checks, we're here
                to ensure your medication regimen is safe and effective.
              </p>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of users making informed medication decisions.
            </p>
            <a
              href="/auth/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Create Free Account
            </a>
          </div>
        </section>
      </div>
    )
  }
  
  // Feature Card Component
  function FeatureCard({ title, description, icon }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
  // Step Card Component
  function StepCard({ number, title, description }) {
    return (
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
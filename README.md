# MedCheck - AI-Powered Drug Interaction Checker

MedCheck is a modern web application that helps users check potential interactions between medications and verify medication suitability using advanced AI technology. Built with Next.js and powered by Llama AI, it provides instant, accurate, and user-friendly medication safety analysis.

## Features

- **Drug Interaction Analysis**: Check potential interactions between multiple medications
- **Medication Suitability Verification**: Verify if a medication is suitable for specific medical conditions
- **AI-Powered Analysis**: Get detailed insights and recommendations using advanced AI technology
- **User History**: Track and review past medication checks
- **Secure Authentication**: Protected user accounts with secure authentication
- **Responsive Design**: Modern, mobile-friendly interface

## Tech Stack

- **Frontend**: Next.js 14, React 18, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **AI Integration**: Llama AI
- **Styling**: TailwindCSS

## Prerequisites

- Node.js 18.x or later
- MongoDB instance
- Llama AI instance running locally (http://localhost:11434)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Sign Up/Login**: Create an account or log in to access the features
2. **Check Drug Interactions**:
   - Enter multiple medications
   - Add any relevant medical conditions
   - Get detailed interaction analysis
3. **Check Medication Suitability**:
   - Enter a medication to check
   - Add your medical conditions
   - Include current medications and allergies
   - Receive suitability assessment
4. **View History**: Access your past medication checks and analyses

## Medical Disclaimer

This tool is for informational purposes only. Always consult with a qualified healthcare provider about your medications and medical conditions. The information provided should not be used as a substitute for professional medical advice, diagnosis, or treatment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

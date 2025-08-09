# Drug Interaction Checker

A comprehensive web application built with [Next.js](https://nextjs.org) that helps healthcare professionals and patients check drug interactions and medication suitability using AI. This tool leverages the power of large language models through Ollama to provide intelligent analysis of medication combinations and their suitability for specific medical conditions.

**MedCheck Demo**
![MedCheck_Demo](public/images/Demo1.gif)

**Check Interactions**
![Check_Interactions](public/images/check_interactions.gif)

**Medication Suitability**
![Medication_Suitability](public/images/suitability_analysis.gif)


## Features

- **Drug Interaction Analysis**: Check potential interactions between multiple medications
- **Medication Suitability Assessment**: Evaluate if a medication is suitable for specific medical conditions
- **User Authentication**: Secure login and registration system
- **History Tracking**: Save and review past medication checks
- **Responsive Design**: Works on desktop and mobile devices
- **AI-Powered Analysis**: Utilizes Llama 3.2 model through Ollama for intelligent medication analysis

## Prerequisites

### Ollama Installation (Required)

This application requires Ollama to be installed locally to function properly. Ollama provides the AI capabilities for analyzing drug interactions and medication suitability.

1. Download and install Ollama from the [official website](https://ollama.com/download)
2. After installation, pull the Llama 3.2 model by running:
   ```bash
   ollama pull llama3.2
   ```
3. Ensure Ollama is running before starting the application

### Other Requirements

- Node.js 18.x or later
- MongoDB database (local or Atlas)
- Email service for password reset functionality

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your configuration
4. Start Ollama and ensure the llama3.2 model is available
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser

## Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   │   ├── analyze-interactions/  # Drug interaction analysis endpoint
│   │   ├── check-suitability/     # Medication suitability endpoint
│   │   └── auth/                  # Authentication endpoints
│   ├── check-interactions/  # Drug interaction check page
│   ├── check-suitability/   # Medication suitability check page
│   ├── dashboard/           # User dashboard
│   ├── history/             # Check history page
│   └── profile/             # User profile page
├── components/          # Reusable components
│   ├── auth/            # Authentication components
│   ├── navigation/      # Navigation components
│   └── ui/              # UI components
├── lib/                 # Utility functions
│   ├── db/              # Database utilities
│   └── api/             # API utilities
└── models/              # Database models
```

## How It Works

### Drug Interaction Analysis

The application sends the list of medications to the Ollama API, which uses the Llama 3.2 model to analyze potential interactions. The analysis includes:

- Detection of known drug interactions
- Severity assessment (none, low, moderate, high)
- Detailed explanation of potential effects
- Recommendations for safer alternatives
- Overall safety assessment

### Medication Suitability Check

Users can check if a specific medication is suitable for their medical conditions. The analysis includes:

- Suitability score (0-100)
- Potential concerns or contraindications
- Alternative medication suggestions
- Recommendations for safe use
- Detailed explanation of the assessment

## Environment Variables

Create a `.env` file with the following variables:

```
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# Email Configuration (for password reset)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_app_password
EMAIL_FROM=your_email@example.com

# Ollama Configuration
OLLAMA_MODEL=llama3.2

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Troubleshooting

### Ollama Connection Issues

If you encounter issues connecting to Ollama:

1. Ensure Ollama is running (`ollama serve` in terminal)
2. Verify the llama3.2 model is installed (`ollama list`)
3. Check that Ollama is accessible at http://localhost:11434
4. Restart the application after ensuring Ollama is running

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

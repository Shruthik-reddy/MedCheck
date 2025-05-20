import Navbar from '../components/navigation/Navbar';
import { AuthProvider } from '../components/auth/provider';

export const metadata = {
  title: 'Drug Interaction Checker',
  description: 'AI-powered drug interaction and medication suitability checker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
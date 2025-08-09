import './globals.css';
import Navbar from '../components/navigation/Navbar';
import { AuthProvider } from '../components/auth/provider';

export const metadata = {
  title: 'Drug Interaction Checker',
  description: 'AI-powered drug interaction and medication suitability checker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
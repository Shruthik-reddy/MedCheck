'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOutAction } from '@/app/actions/auth';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const router = useRouter();

  const handleSignOut = async () => {
    console.log('Sign out clicked - using NextAuth signOut');
    setIsProfileOpen(false);
    
    try {
      // First try to call the server action to clear cookies
      await signOutAction();
      
      // Then use NextAuth's signOut function with force option
      await signOut({ 
        callbackUrl: '/',
        redirect: true,
      });
    } catch (error) {
      console.error('Sign out error:', error);
      // Fallback: force redirect to home page
      window.location.href = '/';
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Check for debug info from previous signout attempt
    const debugInfo = localStorage.getItem('signout-debug');
    if (debugInfo) {
      console.log('Previous signout debug info:', JSON.parse(debugInfo));
      localStorage.removeItem('signout-debug');
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return 'U';
    const initials = name.trim().split(' ').map(word => word[0]).join('');
    return initials.slice(0, 2).toUpperCase();
  };

  const handleProfileClick = () => {
    setIsProfileOpen(false);
    router.push('/profile');
  };

  const handleSettingsClick = () => {
    setIsProfileOpen(false);
    router.push('/settings');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MedCheck</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/check-interactions" className="nav-link">Drug Interactions</Link>
            <Link href="/check-suitability" className="nav-link">Medication Suitability</Link>
            <Link href="/history" className="nav-link">History</Link>
            <Link href="#about" className="nav-link">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="text-gray-600">Loading...</div>
            ) : session ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                      {getInitials(session.user.name)}
                    </div>
                  )}
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <button
                      onClick={handleProfileClick}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleSettingsClick}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Settings
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/signin" className="text-gray-600 hover:text-blue-600">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
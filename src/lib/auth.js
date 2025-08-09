import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export function getAuthUser() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token');
    
    if (!token) {
      return null;
    }
    
    const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET);
    return {
      id: decoded.userId,
      email: decoded.email,
      name: decoded.name
    };
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}

export function isAuthenticated() {
  return getAuthUser() !== null;
}

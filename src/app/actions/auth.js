'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signOutAction() {
  // Clear all NextAuth cookies
  const cookieStore = cookies();
  
  // Get all cookies and clear NextAuth related ones
  const allCookies = cookieStore.getAll();
  
  allCookies.forEach(cookie => {
    if (cookie.name.includes('next-auth') || cookie.name.includes('__Secure-next-auth') || cookie.name.includes('__Host-next-auth')) {
      cookieStore.delete(cookie.name);
      console.log(`Deleted cookie: ${cookie.name}`);
    }
  });
  
  // Don't redirect here - let the client handle it
  // This allows the function to complete without interruption
  return { success: true };
}

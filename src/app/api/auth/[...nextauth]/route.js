import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log('Authorize called with:', credentials?.email);
          
          if (!credentials?.email || !credentials?.password) {
            console.log('Missing credentials');
            return null;
          }

          await dbConnect();
          console.log('Database connected');
          
          const user = await User.findOne({ email: credentials.email });
          console.log('User found:', user ? 'Yes' : 'No');
          
          if (user) {
            const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
            console.log('Password match:', isPasswordMatch);
            
            if (isPasswordMatch) {
              const userObj = {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                image: user.image && user.image.length > 1000 ? null : user.image
              };
              console.log('Returning user (image truncated for log):', {
                id: userObj.id,
                email: userObj.email,
                name: userObj.name,
                hasImage: !!userObj.image
              });
              return userObj;
            }
          }
          
          console.log('Authentication failed');
          return null;
        } catch (error) {
          console.error('Authorize error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      console.log('JWT callback - trigger:', trigger, 'token exists:', !!token, 'user exists:', !!user);
      
      // If signout trigger, return null to invalidate token
      if (trigger === 'signOut') {
        console.log('JWT: Signout triggered - invalidating token');
        return null;
      }
      
      if (user) {
        token.id = user.id;
        // Don't store large images in JWT to prevent session persistence issues
        token.image = user.image && user.image.length > 100 ? null : user.image;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Session callback - token exists:', !!token, 'session exists:', !!session);
      
      // If no token, return null session
      if (!token) {
        console.log('Session: No token - returning null session');
        return null;
      }
      
      session.user.id = token.id;
      session.user.image = token.image;
      return session;
    }
  },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 }, // 24 hours
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    signOut: async ({ token }) => {
      console.log('NextAuth signOut event triggered');
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
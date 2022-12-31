import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider ({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "email", type: "email", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials: any, req: any) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await fetch("http://localhost:86/api/auth/login", {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (!res.ok || !user.user) {
          throw new Error('User not found');
        }
        if (res.ok && user.user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user
      }

      if (Date.now() < new Date(token.user.expires_in).getTime()) {
        return token;
      }

      return refreshAccessToken(token);
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;  // Setting token in session
      return session;
    },
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login'
  },
});

async function refreshAccessToken(token: any) {
  if (token.user.access_token) {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ENPOINT_API + '/auth/refresh', [],
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token.user.access_token}`
        } },
      );

      const refreshedTokens = response.data;
      console.log('statuusss', response.status);

      if (response.status !== 200) {
        throw refreshedTokens;
      }


      return {
        ...token,
        user: {
          ...token.user,
          access_token: refreshedTokens.access_token,
          expires_in: refreshedTokens.expires_in
        }
      }
    } catch (error) {
      console.error('RefreshAccessTokenError', error);
      return {
        ...token,
        error: 'RefreshAccessTokenError',
      };
    }
  }
}

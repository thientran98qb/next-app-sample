import NextAuth, { DefaultSession } from "next-auth"
import UserType from "./user-type"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      access_token: string,
      expires_in: number,
      id: number,
      email: string,
      name: string
    } & DefaultSession["user"]
  }
}

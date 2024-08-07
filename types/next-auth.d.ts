import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's name. */
      name: string;
      email: string;
      image: string | undefined;
      id: string;
      randomKey: string;
      isSuperAdmin: boolean;
      isAdmin: boolean;
      isBlogAdmin: boolean;
      isCourseAdmin: boolean;
      phone: string | undefined;
      joinedDate: Date;
    };
  }
}

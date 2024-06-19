import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password!
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.name,
          isSuperAdmin: user.isSuperAdmin || false,
          isAdmin: user.isAdmin || false,
          isBlogAdmin: user.isBlogAdmin || false,
          isCourseAdmin: user.isCourseAdmin || false,
          phone: user.phone || null,
          joinedDate: user.createdAt || new Date(),
          randomKey: "Hey cool",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["none"],
      // profile(profile, tokens) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     isAdmin: profile.isAdmin,
      //     isSuperAdmin: profile.isSuperAdmin,
      //     isBlogAdmin: profile.isBlogAdmin,
      //     isCourseAdmin: profile.isCourseAdmin,
      //   };
      // },
    }),
  ],
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await db.user.findUnique({ where: { id: user.id } });

      if (!existingUser?.emailVerified) return false;

      return true;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
          isSuperAdmin: token.isSuperAdmin || false,
          isAdmin: token.isAdmin || false,
          isBlogAdmin: token.isBlogAdmin || false,
          isCourseAdmin: token.isCourseAdmin || false,
          phone: token.phone || null,
          joinedDate: token.joinedDate || new Date(),
        },
      };
    },
    jwt: ({ token, user, trigger, session }) => {

      if (trigger === "update" && session) {
        return { ...token, ...session?.user };
      }

      if (user) {
        const u = user as User;
        return {
          ...u,
          ...token,
        };
      }
      return token;
    },
    async redirect({url, baseUrl}) {
      return Promise.resolve(url)
    }
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

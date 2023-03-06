import type { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../env.mjs";
import { prisma } from "./db";
import Credentials from "next-auth/providers/credentials.js";

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks,
 * etc.
 *
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "Credentials",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //   },
    //   async authorize(credentials, req) {
    //     const dbUser = await prisma.learningModel.findUnique({
    //       where: {
    //         user: credentials.username,
    //       },
    //     });
    //     if (dbUser) {
    //       return dbUser;
    //     }
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //     const res = await fetch("http://localhost:3000/api/auth/credentials", {
    //       method: "POST",
    //       body: JSON.stringify(credentials),
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     const user = await res.json();
    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //       return user;
    //     }
    //     // Return null if user data could not be retrieved
    //     return null;
    //   },
    // }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

import { createTRPCRouter } from "./trpc";
import { publicProcedure } from "./trpc";
import { z } from "zod";
import { prisma } from "../db";
import { createUserRouter } from "./routers/createuser";
import {receivedData} from './routers/returnedData'
import { createEventRouter } from "./routers/createevent";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  receivedData,
  createUser: createUserRouter,
  createEvent: createEventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// find and create user see auth, use input query find user, if not create user

import { createTRPCRouter } from "./trpc";
import { receivedData } from "./routers/returnedData";
import { prismatestRouter } from "./routers/prismatest";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({

  receivedData,
  prismatest: prismatestRouter
  // useridnick: UserIdNickRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { createTRPCRouter } from "./trpc";
import { createUserRouter } from "./routers/createuser";
import { receivedData } from "./routers/returnedData";
import { createEventRouter } from "./routers/createevent";
import { findUserRouter } from "./routers/finduser";
import { findSessionRouter } from "./routers/findsession";
import { savedatafromapiRouter } from "./routers/savedatafromapi";
import { uploadedData } from "./routers/uploadeddata";
import { getCourse } from "./routers/findcourse";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  receivedData,
  createUser: createUserRouter,
  createEvent: createEventRouter,
  findUser: findUserRouter,
  findSession: findSessionRouter,
  savedatafromapi: savedatafromapiRouter,
  uploadedData,
  getCourse,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// find and create user see auth, use input query find user, if not create user

import { createTRPCRouter } from "../trpc";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const createEventRouter = createTRPCRouter({
  // createEvent: publicProcedure
  //   .input(
  //     z.object({
  //       // sessionID: z.string(),
  //       eventType: z.string(),
  //       eventDescription: z.string(),
  //       eventStatus: z.string(),
  //       // userSession: z.any(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.event.create({
  //         data: {
  //           // sessionID: input.sessionID,
  //           eventType: input.eventType,
  //           eventDescription: input.eventDescription,
  //           eventStatus: input.eventStatus,
  //           // userSession: input.userSession,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
});

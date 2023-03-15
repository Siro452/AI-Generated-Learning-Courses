import { createTRPCRouter } from "../trpc";
// import { publicProcedure } from "../trpc";
// import { z } from "zod";

export const createEventRouter = createTRPCRouter({
  //may be needed for other events
  // createEvent: publicProcedure
  //   .input(
  //     z.object({
  //       eventType: z.string(),
  //       eventDescription: z.string(),
  //       eventStatus: z.string(),
  //       sessionID: z.string(),
  //       userid: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.event.create({
  //         data: {
  //           eventType: input.eventType,
  //           eventDescription: input.eventDescription,
  //           eventStatus: input.eventStatus,
  //           sessionID: input.sessionID,
  //           userid: input.userid,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
});

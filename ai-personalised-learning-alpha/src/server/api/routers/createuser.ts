import { createTRPCRouter } from "../trpc";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const createUserRouter = createTRPCRouter({
  // getAll: publicProcedure.query(async ({ ctx }) => {
  //   try {
  //     return await ctx.prisma.userSession.findMany({
  //       select: {
  //         id: true,
  //         createdAt: true,
  //         userid: true,
  //         sessionID: true,
  //         eventID: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }),
  // createUser: publicProcedure
  //   .input(
  //     z.object({
  //       userid: z.string(),
  //       sessionID: z.string(),
  //       eventID: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.userSession.create({
  //         data: {
  //           userid: input.userid,
  //           sessionID: input.sessionID,
  //           eventID: input.eventID,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
});

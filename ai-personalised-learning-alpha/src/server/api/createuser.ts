import { createTRPCRouter } from "./trpc";
import { publicProcedure } from "./trpc";
import { z } from "zod";

export const createUserRouter = createTRPCRouter({
  // getAll: publicProcedure.query(async ({ ctx }) => {
  //   try {
  //     return await ctx.prisma.learningModel.findMany({
  //       select: {
  //         id: true,
  //         createdAt: true,
  //         username: true,
  //         sessionID: true,
  //         eventID: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   try {
  //     return await ctx.prisma.event.findMany({
  //       select: {
  //         id: true,
  //         createdAt: true,
  //         eventType: true,
  //         eventDescription: true,
  //         eventStatus: true,
  //         eventDate: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }),
  // createUser: publicProcedure
  //   .input(
  //     z.object({
  //       username: z.string(),
  //       sessionID: z.string(),
  //       eventID: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.learningModel.create({
  //         data: {
  //           username: input.username,
  //           sessionID: input.sessionID,
  //           eventID: input.eventID,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
  // createEvent: publicProcedure
  //   .input(
  //     z.object({
  //       eventType: z.string(),
  //       eventDescription: z.string(),
  //       eventStatus: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       await ctx.prisma.event.create({
  //         data: {
  //           eventType: input.eventType,
  //           eventDescription: input.eventDescription,
  //           eventStatus: input.eventStatus,
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }),
});

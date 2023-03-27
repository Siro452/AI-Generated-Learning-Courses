import { createTRPCRouter } from "../trpc";
import { publicProcedure } from "../trpc";
import { z } from "zod";

type CreateSessionInput = {
  id: string;
  sessionDate: string;
  event: {
    eventType: string;
    eventDescription: string;
    eventStatus: string;
  }[];
};

export const existingUserCreateSessionRouter = createTRPCRouter({
  findExistingUserNoSession: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
      });
      return user;
    }),
  existingUserCreateSession: publicProcedure
    .input(
      z.object({
        username: z.string(),
        sessionDate: z.string(),
        event: z.array(
          z.object({
            eventType: z.string(),
            eventDescription: z.string(),
            eventStatus: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });

      if (!user) {
        throw new Error("User does not exist");
      }

      const session = await ctx.prisma.session.create({
        data: {
          sessionDate: input.sessionDate,
          event: {
            create: input.event.map((event) => ({
              eventType: event.eventType,
              eventDescription: event.eventDescription,
              eventStatus: event.eventStatus,
            })),
          },
          User: { connect: { id: user.id } },
        },
        include: {
          User: true,
          event: true,
        },
      });

      return {
        id: session.id,
        username: user.username,
        sessionDate: session.sessionDate,
        event: session.event,
      };
    }),
});

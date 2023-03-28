import { createTRPCRouter, publicProcedure } from "../trpc";

export const findUserRouter = createTRPCRouter({
findExistingUserSession: publicProcedure
    .input(
      z.object({
        userid: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.userid,
        },
      });
      return user;
    }),
});
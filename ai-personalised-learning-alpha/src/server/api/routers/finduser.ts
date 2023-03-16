import { createTRPCRouter, publicProcedure } from "../trpc";

export const findUserRouter = createTRPCRouter({
  findUser: publicProcedure.query(async ({ ctx, input }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: {
          username: input,
        },
        include: {
          sessions: {
            select: {
              id: true,
              event: true,
            },
          },
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to find user");
    }
  }),
});

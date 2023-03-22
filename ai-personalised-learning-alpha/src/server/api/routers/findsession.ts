import { createTRPCRouter, publicProcedure } from "../trpc";

export const findSessionRouter = createTRPCRouter({
  // findSession: publicProcedure.query(async ({ ctx, input }) => {
  //   try {
  //     const session = await ctx.prisma.session.findUnique({
  //       where: {
  //         userid: userid.input,
  //       },
  //       select: {
  //         id: true,
  //       },
  //     });
  //     return session;
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error("Failed to find session");
  //   }
  // }),
});

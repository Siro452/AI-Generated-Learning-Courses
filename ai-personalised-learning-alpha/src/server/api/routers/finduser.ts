import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const findUserRouter = createTRPCRouter({
<<<<<<<< <Temporary merge branch 1
  findUser: publicProcedure.query(async ({ ctx, input }) => {
  try {
=========
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
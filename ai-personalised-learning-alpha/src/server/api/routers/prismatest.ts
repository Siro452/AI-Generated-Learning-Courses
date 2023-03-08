import {t, publicProcedure } from "../trpc";
import { z } from "zod";

export const prismatestRouter = t.router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.clientdb.findMany({
        select: {
          name: true,
          message: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});

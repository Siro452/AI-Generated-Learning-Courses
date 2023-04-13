import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const findCourseRouter = createTRPCRouter({
  // findCourse: publicProcedure
  //   .input(
  //     z.object({
  //       userid: z.string(),
  //     })
  //   )
  //   .output(
  //       z.array(
  //           z.object({
  //               course:z.array(
  //                   z.object({
  //                       course:
  //                   })
  //               )
  //           })
  //       )
  //   )
  //   .query(async ({ ctx, input }) => {
  //     const course = await ctx.prisma.course.findUnique({
  //       where: {
  //         userid: input.userid,
  //       },
  //       select: {
  //           course: true,
  //       },
  //     });
  //     return course
  //   }),
});

// have the course ID and the upload ID match up on creation

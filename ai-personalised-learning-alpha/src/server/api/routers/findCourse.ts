// notes from meeting

// getting a query that will await the course id, making a router which is this page that will findUnique course id
// findUnique
// result ({
// input.courseID
// })

//return result

// access the parts of course ID once you have the course ID being returned

import { z } from "zod";
import { t } from "../trpc";
import { prisma } from "../../db";

export const getCourse = t.router({
  courseById: t.procedure
    .input(
      z.object({
        courseId: z.string()
      })
    )
    .query(async ({ input }) => {
      const result = await prisma.course.findUnique({
        where: {
          id: input.courseId
        },
      });
      return `This is the result: ${result}`;
    }),
});

// adding another api endpoint that returns what's already in the database.

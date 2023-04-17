import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Course, Prisma } from '@prisma/client';

const findCourseRouter = createTRPCRouter({
  findCourse: publicProcedure.query(
    z.object({
      userid: z.string(),
    })
  ).output(
    z.array(
      z.object({
        id: z.string(),
        userid: z.string(),
        courseNode: z.array(
          z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            sectionNode: z.array(
              z.object({
                id: z.string(),
                title: z.string(),
                compononentNodeArticle: z.array(
                  z.object({
                    id: z.string(),
                    title: z.string(),
                    content: z.string(),
                    order: z.number(),
                  })
                ),
              })
            ),
            sectionNodeAssessment: z.array(
              z.object({
                id: z.string(),
                order: z.number(),
                assessmentQuestion: z.array(
                  z.object({
                    id: z.string(),
                    question: z.string(),
                    option1: z.string(),
                    option2: z.string(),
                    option3: z.string(),
                    option4: z.string(),
                    option5: z.string(),
                    correctAnswer: z.number(),
                    guidance: z.string(),
                    commentary: z.string(),
                  })
                ),
              })
            ),
          })
        ),
      })
    )
  ).use(async ({ input }, { prisma }) => {
    const courses = await prisma.course.findMany({
      where: {
        userid: input.userid,
      },
      select: {
        id: true,
        userid: true,
        courseNode: {
          select: {
            id: true,
            title: true,
            description: true,
            sectionNode: {
              select: {
                id: true,
                title: true,
                compononentNodeArticle: {
                  select: {
                    id: true,
                    title: true,
                    content: true,
                    order: true,
                  },
                },
              },
            },
            sectionNodeAssessment: {
              select: {
                id: true,
                order: true,
                assessmentQuestion: {
                  select: {
                    id: true,
                    question: true,
                    option1: true,
                    option2: true,
                    option3: true,
                    option4: true,
                    option5: true,
                    correctAnswer: true,
                    guidance: true,
                    commentary: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return courses as (Course & {
      courseNode: {
        id: string;
        title: string;
        description: string;
        sectionNode: {
          id: string;
          title: string;
          compononentNodeArticle: {
            id: string;
            title: string;
            content: string;
            order: number;
          }[];
        }[];
        sectionNodeAssessment: {
          id: string;
          order: number;
          assessmentQuestion: {
            id: string;
            question: string;
            option1: string;
            option2: string;
            option3: string;
            option4: string;
            option5: string;
            correctAnswer: number;
            guidance: string;
            commentary: string;
          }[];
        }[];
      }[];
    })[];
  }),
});

export default findCourseRouter;
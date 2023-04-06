import { z } from "zod";
import { t } from "../trpc";

export const savedatafromapiRouter = t.router({
  saveDataFromApi: t.procedure
    .input(
      z.object({
        courseCreate: z.array(
          z.object({
            userid: z.string(),
            courseNode: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
                sectionNode: z.array(
                  z.object({
                    title: z.string(),
                    compononentNodeArticle: z.array(
                      z.object({
                        title: z.string(),
                        content: z.string(),
                        order: z.number(),
                      })
                    ),
                  })
                ),
                sectionNodeAssessment: z.array(
                  z.object({
                    order: z.number(),
                    assessmentQuestion: z.array(
                      z.object({
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
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const apiCreateCourse = await ctx.prisma.course.createMany({
        data: input.courseCreate.map((courseCreate) => ({
          userid: courseCreate.userid,
          courseNode: {
            add: courseCreate.courseNode.map((courseNode) => ({
              title: courseNode.title,
              description: courseNode.description,
              sectionNode: {
                add: courseNode.sectionNode.map((sectionNode) => ({
                  title: sectionNode.title,
                  compononentNodeArticle: {
                    add: sectionNode.compononentNodeArticle.map(
                      (compononentNodeArticle) => ({
                        title: compononentNodeArticle.title,
                        content: compononentNodeArticle.content,
                        order: compononentNodeArticle.order,
                      })
                    ),
                  },
                })),
              },
              sectionNodeAssessment: {
                createMany: courseNode.sectionNodeAssessment.map(
                  (sectionNodeAssessment) => ({
                    order: sectionNodeAssessment.order,
                    assessmentQuestion: {
                      add: sectionNodeAssessment.assessmentQuestion.map(
                        (assessmentQuestion) => ({
                          question: assessmentQuestion.question,
                          option1: assessmentQuestion.option1,
                          option2: assessmentQuestion.option2,
                          option3: assessmentQuestion.option3,
                          option4: assessmentQuestion.option4,
                          option5: assessmentQuestion.option5,
                          correctAnswer: assessmentQuestion.correctAnswer,
                          guidance: assessmentQuestion.guidance,
                          commentary: assessmentQuestion.commentary,
                        })
                      ),
                    },
                  })
                ),
              },
            })),
          },
        })),
      });
      return apiCreateCourse;
    }),
});

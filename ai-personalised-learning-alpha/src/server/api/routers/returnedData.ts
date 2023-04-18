import { z } from "zod";
import { t } from "../trpc";
import { prisma } from "../../db";
// Modification of Data imports
import changeToUpper from "./changeToUpperCase";
import filterLinks from "./filterLinks&em";
import { toCourse } from "../converters/fileDataConversions";

// Modification of Data imports

export const receivedData = t.router({
  // returnedData: t.procedure
  //   .input(
  //     z.object({
  //       clientData: z.string(),
  //     })
  //   )
  //   .query(async ({ input }) => {
  //     // const prismatest = prismatestRouter
  //     const result = await prisma.uploadedDocument.findMany({});
  //     return `${input.clientData}`;
  //   }),
  // post: t.procedure
  //   .input(
  //     z.object({
  //       clientData: z.string(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     const result = await prisma.uploadedDocument.create({
  //       data: {
  //         name: input.,
  //         message: "adding data",
  //       },
  //     });
  //     return result;
  //   }),

  // .mutation(async ({ input }) => {
  //   const result = await prisma.uploadedDocument
  //     .createMany({
  //       data: input.userUpload.map((document) => ({
  //         fileName: document.fileName,
  //         fileContent: document.fileContent,
  //       })),
  //     })
  //     .then((uploadedDocuments) =>
  //       uploadedDocuments.map((uploadedDocument: any) => toCourse(uploadedDocument))
  //     )
  // )
  //   return result;
  // }
  mutateData: t.procedure
    .input(
      z.object({
        userid: z.string(),
        userUpload: z.array(
          z.object({
            fileName: z.string(),
            fileContent: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      await prisma.uploadedDocument.createMany({
        data: input.userUpload.map((document) => ({
          userid: input.userid,
          fileName: document.fileName,
          fileContent: document.fileContent,
        })),
      });

      // const uploadedDocumentId = uploadedDocumentId.id

      const course = await prisma.course.create({
        data: {
          userid: input.userid,
          courseNode: {
            create: [{ title: "my title mate", description: "my description" }],
          },
        },
        include: {
          courseNode: true,
        },
      });

      // .query(async({input}) => {
      //   await prisma.course.findUnique({
      //     where: {
      //       uploaddocumentid
      //     }
      //   })

      // })
      // const Course = await prisma.course.create({
      //   data: {
      //     userid: input.userid,
      //     // UploadedDocument:
      //     courseNode: [input.userUpload.map((
      //       course: {fileName: string; fileContent: string}) => ({
      //         courseNode: {
      //           title: course.fileName,
      //           description: course.fileContent
      //         }
      //       })
      //     )]
      //   },
      // });
      //   data: {
      //     userid: input.userid,
      //     create: [courseNodename: input.userUpload.map(
      //       (course: { fileName: string; fileContent: string }) => ({
      //         CourseNode: {
      //           title: course.fileName,
      //           description: course.fileContent,
      //         },
      //       })
      //     ),
      //     ]
      //   },
      // });
      return course;
    }),
});

// adding another api endpoint that returns what's already in the database.

// route for checking user info to match the course
//

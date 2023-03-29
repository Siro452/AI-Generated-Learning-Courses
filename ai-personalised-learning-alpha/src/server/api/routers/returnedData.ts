import { z } from "zod";
import { t } from "../trpc";
import { prisma } from "../../db";
// Modification of Data imports
import changeToUpper from "./changeToUpperCase";
import filterLinks from "./filterLinks&em";
// Modification of Data imports

export const receivedData = t.router({
  returnedData: t.procedure
    .input(
      z.object({
        clientData: z.string(),
      })
    )
    .query(async ({ input }) => {
      // const prismatest = prismatestRouter
      const result = await prisma.uploadedDocument.findMany({});
      return `${input.clientData}`;
    }),
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
  mutateData: t.procedure
    .input(
      z.object({
        userUpload: z.array(
          // z.object({ filename: z.string(), content: z.string(), sessionid: z.any(), eventid: z.any()})
          z.object({ fileName: z.string(), fileContent: z.string()})
        ),
      })
    )
    .mutation(async ({ input }) => {
      // const modifyString = changeToUpper(input.documents);
      // const removeLinks = filterLinks(input.clientData);
      const result = await prisma.uploadedDocument.createMany({
      data: input.userUpload.map(document => ({
        fileName: document.fileName,
        fileContent: document.fileContent
      }))
      });
      return result;
    }),
});

// adding another api endpoint that returns what's already in the database.


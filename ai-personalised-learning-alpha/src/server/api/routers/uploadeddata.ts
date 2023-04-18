import { z } from "zod";
import { t } from "../trpc";
import { prisma } from "../../db";

export const uploadedData = t.router({
  queryUploadedData: t.procedure
    .input(
      z.object({
        userid: z.string(),
      })
    )
    .output(
      z.array(
        z.object({
          fileName: z.string(),
          fileContent: z.string(),
        })
      )
    )
    .query(async ({ input }) => {
      const uploadedDocuments = await prisma.uploadedDocument.findMany({
        where: {
          userid: input.userid,
        },
        select: {
          fileName: true,
          fileContent: true,
        },
      });
      return uploadedDocuments;
    }),
});

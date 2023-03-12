import { z } from "zod";
import { t } from "../../api/trpc";
import { prisma } from "../../db";
// Modification of Data imports
import changeToUpper from "./changeToUpperCase";
import filterLinks from './filterLinks&em';
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
      const result = await prisma.clientdb.findMany({});
      return `${input.clientData}`;
    }),
  post: t.procedure
    .input(
      z.object({
        clientData: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const result = await prisma.clientdb.create({
        data: {
          name: input.clientData,
          message: 'adding data'
        },
      });
      return result;




    }),
    mutateData: t.procedure
    .input(
      z.object({
        clientData: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const modifyString = changeToUpper(input.clientData)
      const removeLinks = filterLinks(input.clientData)
      const result = await prisma.clientdb.create({
        
        data: {
          name: input.clientData,
          message: 'New item added'
        },
      });
      return removeLinks
      // return result;

}),

})

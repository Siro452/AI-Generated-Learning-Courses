import { createTRPCRouter } from “../trpc”;
import { publicProcedure } from “../trpc”;
import { z } from “zod”;
export const createUserRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        username: z.string(),
        sessions: z.array(
          z.object({
            sessionDate: z.string(),
            event: z.array(
              z.object({
                eventType: z.string(),
                eventDescription: z.string(),
                eventStatus: z.string(),
              })
            ),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.create({
          data: {
            username: input.username,
            sessions: {
              create: input.sessions.map((session) => ({
                event: {
                  create: session.event.map((event) => ({
                    eventType: event.eventType,
                    eventDescription: event.eventDescription,
                    eventStatus: event.eventStatus,
                  })),
                },
                sessionDate: session.sessionDate,
              })),
            },
          },
          include: {
            sessions: {
              include: {
                event: true,
              },
            },
          },
        });
      } catch (error) {
        console.log(error);
        throw new Error(“User already exist or something went wrong”);
      }
    }),
});

// //import { createTRPCRouter } from "@trpc/server";
// import { z } from "zod";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const createUser = async ({ ctx, input }: any) => {
//   const user = await prisma.user.create({
//     data: {
//       username: input.username,
//       sessions: {
//         create: input.sessions.map((session: any) => ({
//           userid: input.username,
//           event: {
//             create: session.event.map((event: any) => ({
//               eventType: event.eventType,
//               eventDescription: event.eventDescription,
//               eventStatus: event.eventStatus,
//               session: {
//                 connect: {
//                   id: session.sessionId,
//                 },
//               },
//             })),
//           },
//           sessionDate: session.sessionDate,
//         })),
//       },
//     },
//   });

//   return user;
// };

// export const userRouter = createTRPCRouter({
//   createUser: {
//     input: z.object({
//       username: z.string(),
//       sessions: z.array(
//         z.object({
//           sessionId: z.string(),
//           sessionDate: z.string(),
//           event: z.array(
//             z.object({
//               eventType: z.string(),
//               eventDescription: z.string(),
//               eventStatus: z.string(),
//             })
//           ),
//         })
//       ),
//     }),
//     async resolve({ input }) {
//       const user = await createUser({ input, ctx: { prisma } });

//       return user;
//     },
//   },
// });

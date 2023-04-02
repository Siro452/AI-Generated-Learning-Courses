import { createTRPCRouter } from "../trpc";
import { publicProcedure } from "../trpc";
import { z } from "zod";
export const createUserRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        username: z.string(),
        sessions: z.array(
          z.object({
            sessionDate: z.date(),
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
        throw new Error("User already exist or something went wrong");
      }
    }),
});

// import { createTRPCRouter } from "../trpc";
// import { publicProcedure } from "../trpc";
// import { z } from "zod";

// type CreateUserInput = {
//   username: string;
//   sessions: {
//     sessionDate: string;
//     event: {
//       eventType: string;
//       eventDescription: string;
//       eventStatus: string;
//     };
//   }[];
// };

// export const createUserRouter = createTRPCRouter({
//   createUser: publicProcedure
//     .input(
//       z.object({
//         username: z.string(),
//         sessions: z.array(
//           z.object({
//             sessionDate: z.string(),
//             event: z.object({
//               eventType: z.string(),
//               eventDescription: z.string(),
//               eventStatus: z.string(),
//             }),
//           })
//         ),
//       })
//     )
//     .mutation(async ({ ctx, input }: { ctx; input: CreateUserInput }) => {
//       const user = await ctx.prisma.user.findUnique({
//         where: { username: input.username },
//       });

//       if (user) {
//         const session = await ctx.prisma.session.create({
//           data: {
//             sessionDate: input.sessions[0].sessionDate,
//             event: {
//               create: {
//                 eventType: input.sessions[0].event.eventType,
//                 eventDescription: input.sessions[0].event.eventDescription,
//                 eventStatus: input.sessions[0].event.eventStatus,
//               },
//             },
//             User: { connect: { id: user.id } },
//           },
//           include: {
//             User: true,
//             event: {
//               select: {
//                 eventType: true,
//                 eventDescription: true,
//                 eventStatus: true,
//               },
//             },
//           },
//         });

//         return {
//           id: session.id,
//           username: user.username,
//           sessionDate: session.sessionDate,
//           event: session.event,
//         };
//       } else {
//         const session = await ctx.prisma.session.create({
//           data: {
//             sessionDate: input.sessions[0].sessionDate,
//             event: {
//               create: {
//                 eventType: input.sessions[0].event.eventType,
//                 eventDescription: input.sessions[0].event.eventDescription,
//                 eventStatus: input.sessions[0].event.eventStatus,
//               },
//             },
//             User: {
//               create: {
//                 username: input.username,
//                 sessions: {
//                   create: input.sessions.map((session) => ({
//                     sessionDate: session.sessionDate,
//                     event: {
//                       create: {
//                         eventType: session.event.eventType,
//                         eventDescription: session.event.eventDescription,
//                         eventStatus: session.event.eventStatus,
//                       },
//                     },
//                   })),
//                 },
//               },
//             },
//           },
//           include: {
//             User: true,
//             event: {
//               select: {
//                 eventType: true,
//                 eventDescription: true,
//                 eventStatus: true,
//               },
//             },
//           },
//         });

//         return {
//           id: session.id,
//           username: session.user.username,
//           sessionDate: session.sessionDate,
//           event: session.event[0],
//         };
//       }
//     }),
// });

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

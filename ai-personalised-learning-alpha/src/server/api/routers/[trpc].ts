import { type NextApiRequest, type NextApiResponse } from "next";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../root";
import { createTRPCContext } from "../trpc";
import cors from "nextjs-cors"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Enable cors
    await cors(req, res);

    // Create and call the tRPC handler
    return createNextApiHandler({
        router: appRouter,
        createContext: createTRPCContext,
    })(req, res);
};

export default handler;
import { createRouter as createGeneratedRouter } from "./generated-routers/routers";
import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

const generatedRouter = createGeneratedRouter();

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  generated: generatedRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

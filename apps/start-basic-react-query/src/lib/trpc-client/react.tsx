import { createTRPCReact } from "@trpc/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";

import type { AppRouter } from "@acme/api";

export const trpc = createTRPCReact<AppRouter>();

// export const useTRPC = () => {
//   return trpc.useUtils();
// };

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

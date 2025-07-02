import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import superjson from "superjson";

import { trpc, TRPCProvider } from "~/lib/trpc-client/react";
import { getUrl } from "~/lib/utils/get-url";
import { DefaultCatchBoundary } from "./components/DefaultCatchBoundary";
import { NotFound } from "./components/NotFound";
import { routeTree } from "./routeTree.gen";

// NOTE: Most of the integration code found here is experimental and will
// definitely end up in a more streamlined API in the future. This is just
// to show what's possible with the current APIs.

// export function createRouter() {
//   const queryClient = new QueryClient()

//   return routerWithQueryClient(
//     createTanStackRouter({
//       routeTree,
//       context: { queryClient },
//       defaultPreload: 'intent',
//       defaultErrorComponent: DefaultCatchBoundary,
//       defaultNotFoundComponent: () => <NotFound />,
//     }),
//     queryClient,
//   )
// }

const getRequestHeaders = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest();
    const headers = new Headers(request.headers);

    return Object.fromEntries(headers);
  },
);

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: { serializeData: superjson.serialize },
      hydrate: { deserializeData: superjson.deserialize },
    },
  });

  const trpcClient = trpc.createClient({
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NODE_ENV === "development" ||
          (op.direction === "down" && op.result instanceof Error),
      }),
      httpBatchStreamLink({
        transformer: superjson,
        url: getUrl(),
        async headers() {
          return await getRequestHeaders();
        },
      }),
    ],
  });

  // const serverHelpers = createServerSideHelpers({
  //   client: trpcClient,
  //   queryClient,
  // });

  const serverHelpers = createTRPCOptionsProxy({
    client: trpcClient,
    queryClient: queryClient,
  });

  const router = createTanStackRouter({
    context: { queryClient, trpc: serverHelpers },
    routeTree,
    // defaultPreload: undefined,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    // defaultPendingComponent: () => (
    //   <div className="flex h-full w-full items-center justify-center">
    //     <SolarForbiddenBoldDuotone className="size-20 animate-spin" />
    //   </div>
    // ),
    scrollRestoration: true,
    defaultNotFoundComponent: () => <NotFound />,
    Wrap: (props) => {
      return (
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
          {props.children}
        </TRPCProvider>
      );
    },
  });

  return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

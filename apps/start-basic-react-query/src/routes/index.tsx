import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { useTRPC } from "~/lib/trpc-client/react";

export const Route = createFileRoute("/")({
  loader: ({ context: { trpc, queryClient } }) => {
    queryClient.prefetchQuery(trpc.post.allLocal.queryOptions());
  },
  component: Home,
});

function Home() {
  const trpc = useTRPC();

  const { data: posts } = useSuspenseQuery(trpc.post.allLocal.queryOptions());

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

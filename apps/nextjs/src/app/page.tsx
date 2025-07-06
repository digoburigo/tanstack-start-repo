import { Suspense } from "react";

import { db, ZenstackEnhance } from "@acme/db-zenstack";

import { HydrateClient, prefetch, trpc } from "~/trpc/server";
import {
  CreatePostForm,
  PostCardSkeleton,
  PostList,
} from "./_components/posts";

const enhancedClient = ZenstackEnhance.enhance(db, null, {
  kinds: ["delegate"],
});

export default async function HomePage() {
  prefetch(trpc.post.allLocal.queryOptions());

  const patients = await enhancedClient.patient.findMany();

  return (
    <HydrateClient>
      <main className="container h-screen py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-primary">T3</span> Turbo
          </h1>

          <pre>{JSON.stringify(patients, null, 2)}</pre>
          <CreatePostForm />
          <div className="w-full max-w-2xl overflow-y-scroll">
            <Suspense
              fallback={
                <div className="flex w-full flex-col gap-4">
                  <PostCardSkeleton />
                  <PostCardSkeleton />
                  <PostCardSkeleton />
                </div>
              }
            >
              <PostList />
            </Suspense>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}

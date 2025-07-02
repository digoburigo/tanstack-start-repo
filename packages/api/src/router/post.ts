import type { TRPCRouterRecord } from "@trpc/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod/v4";

import { desc, eq } from "@acme/db";
import { CreatePostSchema, Post } from "@acme/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

let LOCAL_POSTS = [
  {
    id: "1",
    title: "Hello World",
    content: "This is a test post",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Hello World 2",
    content: "This is a test post 2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Hello World 3",
    content: "This is a test post 3",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const postRouter = {
  allLocal: publicProcedure.query(({ ctx }) => {
    return LOCAL_POSTS;
  }),

  byIdLocal: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return LOCAL_POSTS.find((post) => post.id === input);
  }),

  createLocal: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const post = {
        id: crypto.randomUUID(),
        title: input.title,
        content: input.content,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      LOCAL_POSTS.push(post);
      return post;
    }),

  deleteLocal: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    const post = LOCAL_POSTS.find((post) => post.id === input);
    if (!post) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
    LOCAL_POSTS = LOCAL_POSTS.filter((post) => post.id !== input);
    return post;
  }),

  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.Post.findMany({
      orderBy: desc(Post.id),
      limit: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.Post.findFirst({
        where: eq(Post.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(Post).values(input);
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(Post).where(eq(Post.id, input));
  }),
} satisfies TRPCRouterRecord;

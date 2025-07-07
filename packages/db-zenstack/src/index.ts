import type * as ZenstackClient from "./generated/zenstack/logical-prisma-client";
import type { Prisma } from "./prisma/generated/prisma/client";
import type { DefaultArgs } from "./prisma/generated/prisma/client/runtime/library";
import { db } from "./client";
import * as DbTypes from "./types";

export type ZenstackTransactionClient = Omit<
  ZenstackClient.PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  "$transaction" | "$connect" | "$disconnect" | "$on" | "$use" | "$extends"
>;

export { db, DbTypes, DefaultArgs };

export * from "./generated/prisma/client";
export * as ZenstackClient from "./generated/zenstack/logical-prisma-client";
export * as ZenstackZod from "./generated/zenstack/zod";
export * as ZenstackEnhance from "./generated/zenstack/enhance";
export * as ZenstackEnhanceEdge from "./generated/zenstack/enhance-edge";
export * as ZenstackModelMeta from "./generated/zenstack/model-meta";
export * as ZenstackModels from "./generated/zenstack/models";
export * as ZenstackPolicy from "./generated/zenstack/policy";

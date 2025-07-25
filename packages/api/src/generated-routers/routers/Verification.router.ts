/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { db } from ".";
import { createTRPCRouter } from "../../trpc";
import { procedure } from "../../trpc";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.VerificationInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).verification.aggregate(input as any))),

        createMany: procedure.input($Schema.VerificationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.createMany(input as any))),

        create: procedure.input($Schema.VerificationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.create(input as any))),

        deleteMany: procedure.input($Schema.VerificationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.deleteMany(input as any))),

        delete: procedure.input($Schema.VerificationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.delete(input as any))),

        findFirst: procedure.input($Schema.VerificationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).verification.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.VerificationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).verification.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.VerificationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).verification.findMany(input as any))),

        findUnique: procedure.input($Schema.VerificationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).verification.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.VerificationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).verification.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.VerificationInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).verification.groupBy(input as any))),

        updateMany: procedure.input($Schema.VerificationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.updateMany(input as any))),

        update: procedure.input($Schema.VerificationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.update(input as any))),

        upsert: procedure.input($Schema.VerificationInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).verification.upsert(input as any))),

        count: procedure.input($Schema.VerificationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).verification.count(input as any))),

    }
    );
}

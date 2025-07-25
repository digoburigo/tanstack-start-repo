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

        aggregate: procedure.input($Schema.ComorbiditiesInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.aggregate(input as any))),

        createMany: procedure.input($Schema.ComorbiditiesInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.createMany(input as any))),

        create: procedure.input($Schema.ComorbiditiesInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.create(input as any))),

        deleteMany: procedure.input($Schema.ComorbiditiesInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.deleteMany(input as any))),

        delete: procedure.input($Schema.ComorbiditiesInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.delete(input as any))),

        findFirst: procedure.input($Schema.ComorbiditiesInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ComorbiditiesInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ComorbiditiesInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.findMany(input as any))),

        findUnique: procedure.input($Schema.ComorbiditiesInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ComorbiditiesInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ComorbiditiesInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.groupBy(input as any))),

        updateMany: procedure.input($Schema.ComorbiditiesInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.updateMany(input as any))),

        update: procedure.input($Schema.ComorbiditiesInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.update(input as any))),

        upsert: procedure.input($Schema.ComorbiditiesInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).comorbidities.upsert(input as any))),

        count: procedure.input($Schema.ComorbiditiesInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).comorbidities.count(input as any))),

    }
    );
}

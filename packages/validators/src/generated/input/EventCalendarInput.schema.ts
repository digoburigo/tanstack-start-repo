/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
;
import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

;
import { EventCalendarSelectObjectSchema } from '../objects/EventCalendarSelect.schema';
import { EventCalendarIncludeObjectSchema } from '../objects/EventCalendarInclude.schema';
import { EventCalendarWhereUniqueInputObjectSchema } from '../objects/EventCalendarWhereUniqueInput.schema';
import { EventCalendarWhereInputObjectSchema } from '../objects/EventCalendarWhereInput.schema';
import { EventCalendarOrderByWithRelationInputObjectSchema } from '../objects/EventCalendarOrderByWithRelationInput.schema';
import { EventCalendarScalarFieldEnumSchema } from '../enums/EventCalendarScalarFieldEnum.schema';
import { EventCalendarCreateInputObjectSchema } from '../objects/EventCalendarCreateInput.schema';
import { EventCalendarUncheckedCreateInputObjectSchema } from '../objects/EventCalendarUncheckedCreateInput.schema';
import { EventCalendarCreateManyInputObjectSchema } from '../objects/EventCalendarCreateManyInput.schema';
import { EventCalendarUpdateInputObjectSchema } from '../objects/EventCalendarUpdateInput.schema';
import { EventCalendarUncheckedUpdateInputObjectSchema } from '../objects/EventCalendarUncheckedUpdateInput.schema';
import { EventCalendarUpdateManyMutationInputObjectSchema } from '../objects/EventCalendarUpdateManyMutationInput.schema';
import { EventCalendarUncheckedUpdateManyInputObjectSchema } from '../objects/EventCalendarUncheckedUpdateManyInput.schema';
import { EventCalendarCountAggregateInputObjectSchema } from '../objects/EventCalendarCountAggregateInput.schema';
import { EventCalendarMinAggregateInputObjectSchema } from '../objects/EventCalendarMinAggregateInput.schema';
import { EventCalendarMaxAggregateInputObjectSchema } from '../objects/EventCalendarMaxAggregateInput.schema';
import { EventCalendarOrderByWithAggregationInputObjectSchema } from '../objects/EventCalendarOrderByWithAggregationInput.schema';
import { EventCalendarScalarWhereWithAggregatesInputObjectSchema } from '../objects/EventCalendarScalarWhereWithAggregatesInput.schema'

type EventCalendarInputSchemaType = {
    findUnique: z.ZodType<Prisma.EventCalendarFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.EventCalendarFindFirstArgs>,
    findMany: z.ZodType<Prisma.EventCalendarFindManyArgs>,
    create: z.ZodType<Prisma.EventCalendarCreateArgs>,
    createMany: z.ZodType<Prisma.EventCalendarCreateManyArgs>,
    delete: z.ZodType<Prisma.EventCalendarDeleteArgs>,
    deleteMany: z.ZodType<Prisma.EventCalendarDeleteManyArgs>,
    update: z.ZodType<Prisma.EventCalendarUpdateArgs>,
    updateMany: z.ZodType<Prisma.EventCalendarUpdateManyArgs>,
    upsert: z.ZodType<Prisma.EventCalendarUpsertArgs>,
    aggregate: z.ZodType<Prisma.EventCalendarAggregateArgs>,
    groupBy: z.ZodType<Prisma.EventCalendarGroupByArgs>,
    count: z.ZodType<Prisma.EventCalendarCountArgs>
}

export const EventCalendarInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), where: EventCalendarWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), where: EventCalendarWhereInputObjectSchema.optional(), orderBy: z.union([EventCalendarOrderByWithRelationInputObjectSchema, EventCalendarOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: EventCalendarWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(EventCalendarScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), where: EventCalendarWhereInputObjectSchema.optional(), orderBy: z.union([EventCalendarOrderByWithRelationInputObjectSchema, EventCalendarOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: EventCalendarWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(EventCalendarScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), data: z.union([EventCalendarCreateInputObjectSchema, EventCalendarUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([EventCalendarCreateManyInputObjectSchema, z.array(EventCalendarCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), where: EventCalendarWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: EventCalendarWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), data: z.union([EventCalendarUpdateInputObjectSchema, EventCalendarUncheckedUpdateInputObjectSchema]), where: EventCalendarWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([EventCalendarUpdateManyMutationInputObjectSchema, EventCalendarUncheckedUpdateManyInputObjectSchema]), where: EventCalendarWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => EventCalendarSelectObjectSchema.optional()), include: z.lazy(() => EventCalendarIncludeObjectSchema.optional()), where: EventCalendarWhereUniqueInputObjectSchema, create: z.union([EventCalendarCreateInputObjectSchema, EventCalendarUncheckedCreateInputObjectSchema]), update: z.union([EventCalendarUpdateInputObjectSchema, EventCalendarUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: EventCalendarWhereInputObjectSchema.optional(), orderBy: z.union([EventCalendarOrderByWithRelationInputObjectSchema, EventCalendarOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: EventCalendarWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), EventCalendarCountAggregateInputObjectSchema]).optional(), _min: EventCalendarMinAggregateInputObjectSchema.optional(), _max: EventCalendarMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: EventCalendarWhereInputObjectSchema.optional(), orderBy: z.union([EventCalendarOrderByWithAggregationInputObjectSchema, EventCalendarOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EventCalendarScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EventCalendarScalarFieldEnumSchema), _count: z.union([z.literal(true), EventCalendarCountAggregateInputObjectSchema]).optional(), _min: EventCalendarMinAggregateInputObjectSchema.optional(), _max: EventCalendarMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: EventCalendarWhereInputObjectSchema.optional(), orderBy: z.union([EventCalendarOrderByWithRelationInputObjectSchema, EventCalendarOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: EventCalendarWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(EventCalendarScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), EventCalendarCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as EventCalendarInputSchemaType;

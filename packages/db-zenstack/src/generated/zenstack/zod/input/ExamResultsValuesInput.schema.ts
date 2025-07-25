/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
;
import type { Prisma } from '../../models';

;
import { ExamResultsValuesSelectObjectSchema } from '../objects/ExamResultsValuesSelect.schema';
import { ExamResultsValuesIncludeObjectSchema } from '../objects/ExamResultsValuesInclude.schema';
import { ExamResultsValuesWhereUniqueInputObjectSchema } from '../objects/ExamResultsValuesWhereUniqueInput.schema';
import { ExamResultsValuesWhereInputObjectSchema } from '../objects/ExamResultsValuesWhereInput.schema';
import { ExamResultsValuesOrderByWithRelationInputObjectSchema } from '../objects/ExamResultsValuesOrderByWithRelationInput.schema';
import { ExamResultsValuesScalarFieldEnumSchema } from '../enums/ExamResultsValuesScalarFieldEnum.schema';
import { ExamResultsValuesCreateInputObjectSchema } from '../objects/ExamResultsValuesCreateInput.schema';
import { ExamResultsValuesUncheckedCreateInputObjectSchema } from '../objects/ExamResultsValuesUncheckedCreateInput.schema';
import { ExamResultsValuesCreateManyInputObjectSchema } from '../objects/ExamResultsValuesCreateManyInput.schema';
import { ExamResultsValuesUpdateInputObjectSchema } from '../objects/ExamResultsValuesUpdateInput.schema';
import { ExamResultsValuesUncheckedUpdateInputObjectSchema } from '../objects/ExamResultsValuesUncheckedUpdateInput.schema';
import { ExamResultsValuesUpdateManyMutationInputObjectSchema } from '../objects/ExamResultsValuesUpdateManyMutationInput.schema';
import { ExamResultsValuesUncheckedUpdateManyInputObjectSchema } from '../objects/ExamResultsValuesUncheckedUpdateManyInput.schema';
import { ExamResultsValuesCountAggregateInputObjectSchema } from '../objects/ExamResultsValuesCountAggregateInput.schema';
import { ExamResultsValuesMinAggregateInputObjectSchema } from '../objects/ExamResultsValuesMinAggregateInput.schema';
import { ExamResultsValuesMaxAggregateInputObjectSchema } from '../objects/ExamResultsValuesMaxAggregateInput.schema';
import { ExamResultsValuesOrderByWithAggregationInputObjectSchema } from '../objects/ExamResultsValuesOrderByWithAggregationInput.schema';
import { ExamResultsValuesScalarWhereWithAggregatesInputObjectSchema } from '../objects/ExamResultsValuesScalarWhereWithAggregatesInput.schema'

type ExamResultsValuesInputSchemaType = {
    findUnique: z.ZodType<Prisma.ExamResultsValuesFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.ExamResultsValuesFindFirstArgs>,
    findMany: z.ZodType<Prisma.ExamResultsValuesFindManyArgs>,
    create: z.ZodType<Prisma.ExamResultsValuesCreateArgs>,
    createMany: z.ZodType<Prisma.ExamResultsValuesCreateManyArgs>,
    delete: z.ZodType<Prisma.ExamResultsValuesDeleteArgs>,
    deleteMany: z.ZodType<Prisma.ExamResultsValuesDeleteManyArgs>,
    update: z.ZodType<Prisma.ExamResultsValuesUpdateArgs>,
    updateMany: z.ZodType<Prisma.ExamResultsValuesUpdateManyArgs>,
    upsert: z.ZodType<Prisma.ExamResultsValuesUpsertArgs>,
    aggregate: z.ZodType<Prisma.ExamResultsValuesAggregateArgs>,
    groupBy: z.ZodType<Prisma.ExamResultsValuesGroupByArgs>,
    count: z.ZodType<Prisma.ExamResultsValuesCountArgs>
}

export const ExamResultsValuesInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), where: ExamResultsValuesWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), where: ExamResultsValuesWhereInputObjectSchema.optional(), orderBy: z.union([ExamResultsValuesOrderByWithRelationInputObjectSchema, ExamResultsValuesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExamResultsValuesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ExamResultsValuesScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), where: ExamResultsValuesWhereInputObjectSchema.optional(), orderBy: z.union([ExamResultsValuesOrderByWithRelationInputObjectSchema, ExamResultsValuesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExamResultsValuesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ExamResultsValuesScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), data: z.union([ExamResultsValuesCreateInputObjectSchema, ExamResultsValuesUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([ExamResultsValuesCreateManyInputObjectSchema, z.array(ExamResultsValuesCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), where: ExamResultsValuesWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: ExamResultsValuesWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), data: z.union([ExamResultsValuesUpdateInputObjectSchema, ExamResultsValuesUncheckedUpdateInputObjectSchema]), where: ExamResultsValuesWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([ExamResultsValuesUpdateManyMutationInputObjectSchema, ExamResultsValuesUncheckedUpdateManyInputObjectSchema]), where: ExamResultsValuesWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => ExamResultsValuesSelectObjectSchema.optional()), include: z.lazy(() => ExamResultsValuesIncludeObjectSchema.optional()), where: ExamResultsValuesWhereUniqueInputObjectSchema, create: z.union([ExamResultsValuesCreateInputObjectSchema, ExamResultsValuesUncheckedCreateInputObjectSchema]), update: z.union([ExamResultsValuesUpdateInputObjectSchema, ExamResultsValuesUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: ExamResultsValuesWhereInputObjectSchema.optional(), orderBy: z.union([ExamResultsValuesOrderByWithRelationInputObjectSchema, ExamResultsValuesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExamResultsValuesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ExamResultsValuesCountAggregateInputObjectSchema]).optional(), _min: ExamResultsValuesMinAggregateInputObjectSchema.optional(), _max: ExamResultsValuesMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: ExamResultsValuesWhereInputObjectSchema.optional(), orderBy: z.union([ExamResultsValuesOrderByWithAggregationInputObjectSchema, ExamResultsValuesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExamResultsValuesScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ExamResultsValuesScalarFieldEnumSchema), _count: z.union([z.literal(true), ExamResultsValuesCountAggregateInputObjectSchema]).optional(), _min: ExamResultsValuesMinAggregateInputObjectSchema.optional(), _max: ExamResultsValuesMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: ExamResultsValuesWhereInputObjectSchema.optional(), orderBy: z.union([ExamResultsValuesOrderByWithRelationInputObjectSchema, ExamResultsValuesOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ExamResultsValuesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ExamResultsValuesScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ExamResultsValuesCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as ExamResultsValuesInputSchemaType;

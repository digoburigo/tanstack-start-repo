/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsValuesWhereInputObjectSchema } from './ExamResultsValuesWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ExamResultsListRelationFilterObjectSchema } from './ExamResultsListRelationFilter.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ExamResultsValuesWhereUniqueInput>;
export const ExamResultsValuesWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), value: z.string().optional().optional(), AND: z.union([z.lazy(() => ExamResultsValuesWhereInputObjectSchema),
    z.lazy(() => ExamResultsValuesWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ExamResultsValuesWhereInputObjectSchema).array().optional().optional(), NOT: z.union([z.lazy(() => ExamResultsValuesWhereInputObjectSchema),
    z.lazy(() => ExamResultsValuesWhereInputObjectSchema).array()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), examResults: z.lazy(() => ExamResultsListRelationFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

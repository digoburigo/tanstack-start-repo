/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MedicationsListRelationFilterObjectSchema } from './MedicationsListRelationFilter.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsValuesWhereInput>;
export const MedicationsValuesWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => MedicationsValuesWhereInputObjectSchema),
    z.lazy(() => MedicationsValuesWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => MedicationsValuesWhereInputObjectSchema).array().optional().optional(), NOT: z.union([z.lazy(() => MedicationsValuesWhereInputObjectSchema),
    z.lazy(() => MedicationsValuesWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), value: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), medications: z.lazy(() => MedicationsListRelationFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

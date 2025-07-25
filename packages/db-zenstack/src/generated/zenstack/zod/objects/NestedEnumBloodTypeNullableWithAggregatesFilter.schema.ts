/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { BloodTypeSchema } from '../enums/BloodType.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumBloodTypeNullableFilterObjectSchema } from './NestedEnumBloodTypeNullableFilter.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.NestedEnumBloodTypeNullableWithAggregatesFilter>;
export const NestedEnumBloodTypeNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => BloodTypeSchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => BloodTypeSchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => BloodTypeSchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => BloodTypeSchema),
    z.lazy(() => NestedEnumBloodTypeNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional().optional(), _min: z.lazy(() => NestedEnumBloodTypeNullableFilterObjectSchema).optional().optional(), _max: z.lazy(() => NestedEnumBloodTypeNullableFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

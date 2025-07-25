/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { NestedBoolNullableWithAggregatesFilterObjectSchema } from './NestedBoolNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.BoolNullableWithAggregatesFilter>;
export const BoolNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.boolean(),
    z.null()]).optional().nullable(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional().optional(), _min: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional().optional(), _max: z.lazy(() => NestedBoolNullableFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

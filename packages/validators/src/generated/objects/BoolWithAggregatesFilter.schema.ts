/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { NestedBoolWithAggregatesFilterObjectSchema } from './NestedBoolWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.BoolWithAggregatesFilter>;
export const BoolWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.boolean().optional().optional(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]).optional(), _count: z.lazy(() => NestedIntFilterObjectSchema).optional().optional(), _min: z.lazy(() => NestedBoolFilterObjectSchema).optional().optional(), _max: z.lazy(() => NestedBoolFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

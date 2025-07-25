/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectSchema: SchemaType = z.object({
    equals: z.boolean().optional().optional(), not: z.union([z.boolean(),
    z.lazy(() => NestedBoolFilterObjectSchema)]).optional()
}).strict() as SchemaType;

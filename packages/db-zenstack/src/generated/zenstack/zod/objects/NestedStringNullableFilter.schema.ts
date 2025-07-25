/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.NestedStringNullableFilter>;
export const NestedStringNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.string(),
    z.null()]).optional().nullable(), in: z.union([z.string().array(),
    z.null()]).optional().nullable(), notIn: z.union([z.string().array(),
    z.null()]).optional().nullable(), lt: z.string().optional().optional(), lte: z.string().optional().optional(), gt: z.string().optional().optional(), gte: z.string().optional().optional(), contains: z.string().optional().optional(), startsWith: z.string().optional().optional(), endsWith: z.string().optional().optional(), not: z.union([z.string(),
    z.lazy(() => NestedStringNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;

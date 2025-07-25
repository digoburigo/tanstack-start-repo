/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.NestedStringFilter>;
export const NestedStringFilterObjectSchema: SchemaType = z.object({
    equals: z.string().optional().optional(), in: z.string().array().optional().optional(), notIn: z.string().array().optional().optional(), lt: z.string().optional().optional(), lte: z.string().optional().optional(), gt: z.string().optional().optional(), gte: z.string().optional().optional(), contains: z.string().optional().optional(), startsWith: z.string().optional().optional(), endsWith: z.string().optional().optional(), not: z.union([z.string(),
    z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict() as SchemaType;

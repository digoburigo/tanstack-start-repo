/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesValuesCountAggregateInputType>;
export const AllergiesValuesCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional().optional(), value: z.literal(true).optional().optional(), createdAt: z.literal(true).optional().optional(), _all: z.literal(true).optional().optional()
}).strict() as SchemaType;

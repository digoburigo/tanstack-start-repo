/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesValuesMaxOrderByAggregateInput>;
export const ComorbiditiesValuesMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), value: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional()
}).strict() as SchemaType;

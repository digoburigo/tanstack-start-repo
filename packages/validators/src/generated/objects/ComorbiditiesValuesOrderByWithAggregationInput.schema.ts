/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ComorbiditiesValuesCountOrderByAggregateInputObjectSchema } from './ComorbiditiesValuesCountOrderByAggregateInput.schema';
import { ComorbiditiesValuesMaxOrderByAggregateInputObjectSchema } from './ComorbiditiesValuesMaxOrderByAggregateInput.schema';
import { ComorbiditiesValuesMinOrderByAggregateInputObjectSchema } from './ComorbiditiesValuesMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesValuesOrderByWithAggregationInput>;
export const ComorbiditiesValuesOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), value: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), _count: z.lazy(() => ComorbiditiesValuesCountOrderByAggregateInputObjectSchema).optional().optional(), _max: z.lazy(() => ComorbiditiesValuesMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: z.lazy(() => ComorbiditiesValuesMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict() as SchemaType;

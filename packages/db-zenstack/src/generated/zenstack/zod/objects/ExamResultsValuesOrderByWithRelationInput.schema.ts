/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamResultsOrderByRelationAggregateInputObjectSchema } from './ExamResultsOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ExamResultsValuesOrderByWithRelationInput>;
export const ExamResultsValuesOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), value: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), examResults: z.lazy(() => ExamResultsOrderByRelationAggregateInputObjectSchema).optional().optional()
}).strict() as SchemaType;

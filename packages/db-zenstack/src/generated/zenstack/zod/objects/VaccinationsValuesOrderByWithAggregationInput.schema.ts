/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VaccinationsValuesCountOrderByAggregateInputObjectSchema } from './VaccinationsValuesCountOrderByAggregateInput.schema';
import { VaccinationsValuesMaxOrderByAggregateInputObjectSchema } from './VaccinationsValuesMaxOrderByAggregateInput.schema';
import { VaccinationsValuesMinOrderByAggregateInputObjectSchema } from './VaccinationsValuesMinOrderByAggregateInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsValuesOrderByWithAggregationInput>;
export const VaccinationsValuesOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), value: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), _count: z.lazy(() => VaccinationsValuesCountOrderByAggregateInputObjectSchema).optional().optional(), _max: z.lazy(() => VaccinationsValuesMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: z.lazy(() => VaccinationsValuesMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HealthPlansCountOrderByAggregateInputObjectSchema } from './HealthPlansCountOrderByAggregateInput.schema';
import { HealthPlansMaxOrderByAggregateInputObjectSchema } from './HealthPlansMaxOrderByAggregateInput.schema';
import { HealthPlansMinOrderByAggregateInputObjectSchema } from './HealthPlansMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansOrderByWithAggregationInput>;
export const HealthPlansOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), type: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), createdById: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional().optional(), updatedById: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), deletedAt: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), deletedById: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), deleted: z.lazy(() => SortOrderSchema).optional().optional(), organizationId: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), patientId: z.lazy(() => SortOrderSchema).optional().optional(), healthPlansValuesId: z.lazy(() => SortOrderSchema).optional().optional(), _count: z.lazy(() => HealthPlansCountOrderByAggregateInputObjectSchema).optional().optional(), _max: z.lazy(() => HealthPlansMaxOrderByAggregateInputObjectSchema).optional().optional(), _min: z.lazy(() => HealthPlansMinOrderByAggregateInputObjectSchema).optional().optional()
}).strict() as SchemaType;

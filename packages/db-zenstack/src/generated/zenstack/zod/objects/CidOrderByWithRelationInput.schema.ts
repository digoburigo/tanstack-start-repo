/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppointmentCidOrderByRelationAggregateInputObjectSchema } from './AppointmentCidOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.CidOrderByWithRelationInput>;
export const CidOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), code: z.lazy(() => SortOrderSchema).optional().optional(), description: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), updatedAt: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), appointmentCid: z.lazy(() => AppointmentCidOrderByRelationAggregateInputObjectSchema).optional().optional()
}).strict() as SchemaType;

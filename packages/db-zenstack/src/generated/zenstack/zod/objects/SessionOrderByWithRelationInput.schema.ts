/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), expiresAt: z.lazy(() => SortOrderSchema).optional().optional(), token: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), updatedAt: z.lazy(() => SortOrderSchema).optional().optional(), ipAddress: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), userAgent: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), userId: z.lazy(() => SortOrderSchema).optional().optional(), impersonatedBy: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), activeOrganizationId: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional().optional()
}).strict() as SchemaType;

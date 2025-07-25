/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MemberOrderByWithRelationInput>;
export const MemberOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional().optional(), organizationId: z.lazy(() => SortOrderSchema).optional().optional(), userId: z.lazy(() => SortOrderSchema).optional().optional(), role: z.lazy(() => SortOrderSchema).optional().optional(), createdAt: z.lazy(() => SortOrderSchema).optional().optional(), updatedAt: z.lazy(() => SortOrderSchema).optional().optional(), organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional().optional(), user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional().optional()
}).strict() as SchemaType;

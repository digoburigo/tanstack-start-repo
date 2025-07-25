/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MemberUncheckedCreateInput>;
export const MemberUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), organizationId: z.string(), userId: z.string(), role: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional()
}).strict() as SchemaType;

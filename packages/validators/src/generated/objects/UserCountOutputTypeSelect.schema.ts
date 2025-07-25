/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    sessions: z.boolean().optional().optional(), accounts: z.boolean().optional().optional(), members: z.boolean().optional().optional(), invitations: z.boolean().optional().optional(), patientUser: z.boolean().optional().optional(), createdAssets: z.boolean().optional().optional(), updatedAssets: z.boolean().optional().optional(), deletedAssets: z.boolean().optional().optional()
}).strict() as SchemaType;

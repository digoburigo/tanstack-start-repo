/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserCreateNestedOneWithoutMembersInputObjectSchema } from './UserCreateNestedOneWithoutMembersInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MemberCreateWithoutOrganizationInput>;
export const MemberCreateWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), role: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), user: z.lazy(() => UserCreateNestedOneWithoutMembersInputObjectSchema)
}).strict() as SchemaType;

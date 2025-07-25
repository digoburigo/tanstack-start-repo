/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserCreateWithoutCreatedAssetsInputObjectSchema } from './UserCreateWithoutCreatedAssetsInput.schema';
import { UserCreateWithoutUpdatedAssetsInputObjectSchema } from './UserCreateWithoutUpdatedAssetsInput.schema';
import { OrganizationCreateWithoutAssetsInputObjectSchema } from './OrganizationCreateWithoutAssetsInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationCreateWithoutDeletedByUserInput>;
export const DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), deletedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), deleted: z.boolean().optional().optional(), text: z.union([z.string(),
    z.null()]).optional().nullable(), createdByUser: z.lazy(() => UserCreateWithoutCreatedAssetsInputObjectSchema).optional().optional(), updatedByUser: z.lazy(() => UserCreateWithoutUpdatedAssetsInputObjectSchema).optional().optional(), organization: z.lazy(() => OrganizationCreateWithoutAssetsInputObjectSchema).optional().optional()
}).strict() as SchemaType;

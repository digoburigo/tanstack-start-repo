/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutUserInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutUserInput.schema';
import { PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PatientUncheckedCreateNestedManyWithoutUserInput.schema';
import { AssetUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './AssetUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { AssetUncheckedCreateNestedManyWithoutUpdatedByUserInputObjectSchema } from './AssetUncheckedCreateNestedManyWithoutUpdatedByUserInput.schema';
import { AssetUncheckedCreateNestedManyWithoutDeletedByUserInputObjectSchema } from './AssetUncheckedCreateNestedManyWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), name: z.string(), email: z.string(), emailVerified: z.boolean(), image: z.union([z.string(),
    z.null()]).optional().nullable(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), username: z.union([z.string(),
    z.null()]).optional().nullable(), displayUsername: z.union([z.string(),
    z.null()]).optional().nullable(), role: z.union([z.lazy(() => UserRoleSchema),
    z.null()]).optional().nullable(), banned: z.union([z.boolean(),
    z.null()]).optional().nullable(), banReason: z.union([z.string(),
    z.null()]).optional().nullable(), banExpires: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), changePassword: z.union([z.boolean(),
    z.null()]).optional().nullable(), sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), patientUser: z.lazy(() => PatientUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional().optional(), createdAssets: z.lazy(() => AssetUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional().optional(), updatedAssets: z.lazy(() => AssetUncheckedCreateNestedManyWithoutUpdatedByUserInputObjectSchema).optional().optional(), deletedAssets: z.lazy(() => AssetUncheckedCreateNestedManyWithoutDeletedByUserInputObjectSchema).optional().optional()
}).strict() as SchemaType;

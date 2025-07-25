/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserUpdateWithoutInvitationsInputObjectSchema } from './UserUpdateWithoutInvitationsInput.schema';
import { UserUncheckedUpdateWithoutInvitationsInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsInput.schema';
import { UserCreateWithoutInvitationsInputObjectSchema } from './UserCreateWithoutInvitationsInput.schema';
import { UserUncheckedCreateWithoutInvitationsInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutInvitationsInput>;
export const UserUpsertWithoutInvitationsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutInvitationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutInvitationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

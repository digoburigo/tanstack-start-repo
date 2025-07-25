/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserUpdateWithoutMembersInputObjectSchema } from './UserUpdateWithoutMembersInput.schema';
import { UserUncheckedUpdateWithoutMembersInputObjectSchema } from './UserUncheckedUpdateWithoutMembersInput.schema';
import { UserCreateWithoutMembersInputObjectSchema } from './UserCreateWithoutMembersInput.schema';
import { UserUncheckedCreateWithoutMembersInputObjectSchema } from './UserUncheckedCreateWithoutMembersInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutMembersInput>;
export const UserUpsertWithoutMembersInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutMembersInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutMembersInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

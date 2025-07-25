/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedAssetsInputObjectSchema } from './UserCreateWithoutCreatedAssetsInput.schema';
import { UserUncheckedCreateWithoutCreatedAssetsInputObjectSchema } from './UserUncheckedCreateWithoutCreatedAssetsInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedAssetsInput>;
export const UserCreateOrConnectWithoutCreatedAssetsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutCreatedAssetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatedAssetsInputObjectSchema)])
}).strict() as SchemaType;

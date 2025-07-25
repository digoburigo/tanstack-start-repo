/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema';
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput>;
export const AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema),
    z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

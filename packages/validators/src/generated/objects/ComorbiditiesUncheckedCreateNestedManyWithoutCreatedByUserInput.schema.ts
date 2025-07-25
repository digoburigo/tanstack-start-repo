/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesCreateWithoutCreatedByUserInputObjectSchema } from './ComorbiditiesCreateWithoutCreatedByUserInput.schema';
import { ComorbiditiesUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ComorbiditiesUncheckedCreateWithoutCreatedByUserInput.schema';
import { ComorbiditiesCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ComorbiditiesCreateOrConnectWithoutCreatedByUserInput.schema';
import { ComorbiditiesCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ComorbiditiesCreateManyCreatedByUserInputEnvelope.schema';
import { ComorbiditiesWhereUniqueInputObjectSchema } from './ComorbiditiesWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUncheckedCreateNestedManyWithoutCreatedByUserInput>;
export const ComorbiditiesUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ComorbiditiesCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ComorbiditiesCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ComorbiditiesUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ComorbiditiesCreateOrConnectWithoutCreatedByUserInputObjectSchema),
    z.lazy(() => ComorbiditiesCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ComorbiditiesCreateManyCreatedByUserInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema),
    z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

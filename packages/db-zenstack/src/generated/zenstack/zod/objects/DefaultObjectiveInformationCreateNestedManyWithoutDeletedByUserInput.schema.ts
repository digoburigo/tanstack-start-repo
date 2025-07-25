/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationCreateOrConnectWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateOrConnectWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationCreateManyDeletedByUserInputEnvelopeObjectSchema } from './DefaultObjectiveInformationCreateManyDeletedByUserInputEnvelope.schema';
import { DefaultObjectiveInformationWhereUniqueInputObjectSchema } from './DefaultObjectiveInformationWhereUniqueInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationCreateNestedManyWithoutDeletedByUserInput>;
export const DefaultObjectiveInformationCreateNestedManyWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema).array(), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutDeletedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutDeletedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => DefaultObjectiveInformationCreateManyDeletedByUserInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsCreateWithoutDeletedByUserInputObjectSchema } from './VaccinationsCreateWithoutDeletedByUserInput.schema';
import { VaccinationsUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './VaccinationsUncheckedCreateWithoutDeletedByUserInput.schema';
import { VaccinationsCreateOrConnectWithoutDeletedByUserInputObjectSchema } from './VaccinationsCreateOrConnectWithoutDeletedByUserInput.schema';
import { VaccinationsCreateManyDeletedByUserInputEnvelopeObjectSchema } from './VaccinationsCreateManyDeletedByUserInputEnvelope.schema';
import { VaccinationsWhereUniqueInputObjectSchema } from './VaccinationsWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.VaccinationsCreateNestedManyWithoutDeletedByUserInput>;
export const VaccinationsCreateNestedManyWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => VaccinationsCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => VaccinationsCreateWithoutDeletedByUserInputObjectSchema).array(), z.lazy(() => VaccinationsUncheckedCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => VaccinationsUncheckedCreateWithoutDeletedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => VaccinationsCreateOrConnectWithoutDeletedByUserInputObjectSchema),
    z.lazy(() => VaccinationsCreateOrConnectWithoutDeletedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => VaccinationsCreateManyDeletedByUserInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => VaccinationsWhereUniqueInputObjectSchema),
    z.lazy(() => VaccinationsWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

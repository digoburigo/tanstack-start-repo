/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsWhereUniqueInputObjectSchema } from './MedicationsWhereUniqueInput.schema';
import { MedicationsCreateWithoutDeletedByUserInputObjectSchema } from './MedicationsCreateWithoutDeletedByUserInput.schema';
import { MedicationsUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './MedicationsUncheckedCreateWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MedicationsCreateOrConnectWithoutDeletedByUserInput>;
export const MedicationsCreateOrConnectWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => MedicationsWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => MedicationsCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => MedicationsUncheckedCreateWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

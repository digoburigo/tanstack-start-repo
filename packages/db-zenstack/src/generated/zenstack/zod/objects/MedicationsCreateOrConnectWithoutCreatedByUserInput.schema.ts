/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsWhereUniqueInputObjectSchema } from './MedicationsWhereUniqueInput.schema';
import { MedicationsCreateWithoutCreatedByUserInputObjectSchema } from './MedicationsCreateWithoutCreatedByUserInput.schema';
import { MedicationsUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './MedicationsUncheckedCreateWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsCreateOrConnectWithoutCreatedByUserInput>;
export const MedicationsCreateOrConnectWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => MedicationsWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => MedicationsCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => MedicationsUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

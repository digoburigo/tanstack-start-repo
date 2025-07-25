/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsWhereUniqueInputObjectSchema } from './MedicationsWhereUniqueInput.schema';
import { MedicationsUpdateWithoutDeletedByUserInputObjectSchema } from './MedicationsUpdateWithoutDeletedByUserInput.schema';
import { MedicationsUncheckedUpdateWithoutDeletedByUserInputObjectSchema } from './MedicationsUncheckedUpdateWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsUpdateWithWhereUniqueWithoutDeletedByUserInput>;
export const MedicationsUpdateWithWhereUniqueWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => MedicationsWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => MedicationsUpdateWithoutDeletedByUserInputObjectSchema), z.lazy(() => MedicationsUncheckedUpdateWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

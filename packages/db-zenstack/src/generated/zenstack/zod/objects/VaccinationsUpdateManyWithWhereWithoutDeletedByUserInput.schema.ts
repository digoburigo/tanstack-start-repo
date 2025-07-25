/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsScalarWhereInputObjectSchema } from './VaccinationsScalarWhereInput.schema';
import { VaccinationsUpdateManyMutationInputObjectSchema } from './VaccinationsUpdateManyMutationInput.schema';
import { VaccinationsUncheckedUpdateManyWithoutDeletedByUserInputObjectSchema } from './VaccinationsUncheckedUpdateManyWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsUpdateManyWithWhereWithoutDeletedByUserInput>;
export const VaccinationsUpdateManyWithWhereWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => VaccinationsScalarWhereInputObjectSchema), data: z.union([z.lazy(() => VaccinationsUpdateManyMutationInputObjectSchema), z.lazy(() => VaccinationsUncheckedUpdateManyWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

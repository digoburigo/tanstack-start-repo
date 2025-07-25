/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsScalarWhereInputObjectSchema } from './VaccinationsScalarWhereInput.schema';
import { VaccinationsUpdateManyMutationInputObjectSchema } from './VaccinationsUpdateManyMutationInput.schema';
import { VaccinationsUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './VaccinationsUncheckedUpdateManyWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsUpdateManyWithWhereWithoutCreatedByUserInput>;
export const VaccinationsUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => VaccinationsScalarWhereInputObjectSchema), data: z.union([z.lazy(() => VaccinationsUpdateManyMutationInputObjectSchema), z.lazy(() => VaccinationsUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

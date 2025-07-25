/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsValuesUpdateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUpdateWithoutVaccinationsInput.schema';
import { VaccinationsValuesUncheckedUpdateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUncheckedUpdateWithoutVaccinationsInput.schema';
import { VaccinationsValuesCreateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesCreateWithoutVaccinationsInput.schema';
import { VaccinationsValuesUncheckedCreateWithoutVaccinationsInputObjectSchema } from './VaccinationsValuesUncheckedCreateWithoutVaccinationsInput.schema';
import { VaccinationsValuesWhereInputObjectSchema } from './VaccinationsValuesWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsValuesUpsertWithoutVaccinationsInput>;
export const VaccinationsValuesUpsertWithoutVaccinationsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => VaccinationsValuesUpdateWithoutVaccinationsInputObjectSchema), z.lazy(() => VaccinationsValuesUncheckedUpdateWithoutVaccinationsInputObjectSchema)]), create: z.union([z.lazy(() => VaccinationsValuesCreateWithoutVaccinationsInputObjectSchema), z.lazy(() => VaccinationsValuesUncheckedCreateWithoutVaccinationsInputObjectSchema)]), where: z.lazy(() => VaccinationsValuesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

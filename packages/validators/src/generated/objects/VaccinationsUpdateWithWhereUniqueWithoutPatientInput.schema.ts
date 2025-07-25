/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsWhereUniqueInputObjectSchema } from './VaccinationsWhereUniqueInput.schema';
import { VaccinationsUpdateWithoutPatientInputObjectSchema } from './VaccinationsUpdateWithoutPatientInput.schema';
import { VaccinationsUncheckedUpdateWithoutPatientInputObjectSchema } from './VaccinationsUncheckedUpdateWithoutPatientInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.VaccinationsUpdateWithWhereUniqueWithoutPatientInput>;
export const VaccinationsUpdateWithWhereUniqueWithoutPatientInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => VaccinationsWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => VaccinationsUpdateWithoutPatientInputObjectSchema), z.lazy(() => VaccinationsUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientUpdateWithoutMedicationsInputObjectSchema } from './PatientUpdateWithoutMedicationsInput.schema';
import { PatientUncheckedUpdateWithoutMedicationsInputObjectSchema } from './PatientUncheckedUpdateWithoutMedicationsInput.schema';
import { PatientCreateWithoutMedicationsInputObjectSchema } from './PatientCreateWithoutMedicationsInput.schema';
import { PatientUncheckedCreateWithoutMedicationsInputObjectSchema } from './PatientUncheckedCreateWithoutMedicationsInput.schema';
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.PatientUpsertWithoutMedicationsInput>;
export const PatientUpsertWithoutMedicationsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => PatientUpdateWithoutMedicationsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutMedicationsInputObjectSchema)]), create: z.union([z.lazy(() => PatientCreateWithoutMedicationsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutMedicationsInputObjectSchema)]), where: z.lazy(() => PatientWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

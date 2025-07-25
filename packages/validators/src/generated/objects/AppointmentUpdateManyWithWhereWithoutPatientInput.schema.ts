/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema';
import { AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema';
import { AppointmentUncheckedUpdateManyWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutPatientInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput>;
export const AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AppointmentScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict() as SchemaType;

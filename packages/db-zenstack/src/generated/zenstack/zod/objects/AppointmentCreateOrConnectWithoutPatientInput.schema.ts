/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';
import { AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema';
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput>;
export const AppointmentCreateOrConnectWithoutPatientInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict() as SchemaType;

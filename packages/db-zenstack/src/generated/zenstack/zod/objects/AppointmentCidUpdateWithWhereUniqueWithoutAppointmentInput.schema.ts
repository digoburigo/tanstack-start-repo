/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCidWhereUniqueInputObjectSchema } from './AppointmentCidWhereUniqueInput.schema';
import { AppointmentCidUpdateWithoutAppointmentInputObjectSchema } from './AppointmentCidUpdateWithoutAppointmentInput.schema';
import { AppointmentCidUncheckedUpdateWithoutAppointmentInputObjectSchema } from './AppointmentCidUncheckedUpdateWithoutAppointmentInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentCidUpdateWithWhereUniqueWithoutAppointmentInput>;
export const AppointmentCidUpdateWithWhereUniqueWithoutAppointmentInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AppointmentCidUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => AppointmentCidUncheckedUpdateWithoutAppointmentInputObjectSchema)])
}).strict() as SchemaType;

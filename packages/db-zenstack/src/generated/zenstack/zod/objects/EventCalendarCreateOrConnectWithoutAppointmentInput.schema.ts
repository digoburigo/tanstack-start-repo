/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { EventCalendarWhereUniqueInputObjectSchema } from './EventCalendarWhereUniqueInput.schema';
import { EventCalendarCreateWithoutAppointmentInputObjectSchema } from './EventCalendarCreateWithoutAppointmentInput.schema';
import { EventCalendarUncheckedCreateWithoutAppointmentInputObjectSchema } from './EventCalendarUncheckedCreateWithoutAppointmentInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.EventCalendarCreateOrConnectWithoutAppointmentInput>;
export const EventCalendarCreateOrConnectWithoutAppointmentInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => EventCalendarWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => EventCalendarCreateWithoutAppointmentInputObjectSchema), z.lazy(() => EventCalendarUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict() as SchemaType;

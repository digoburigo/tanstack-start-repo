/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCreateWithoutFollowUpInputObjectSchema } from './AppointmentCreateWithoutFollowUpInput.schema';
import { AppointmentUncheckedCreateWithoutFollowUpInputObjectSchema } from './AppointmentUncheckedCreateWithoutFollowUpInput.schema';
import { AppointmentCreateOrConnectWithoutFollowUpInputObjectSchema } from './AppointmentCreateOrConnectWithoutFollowUpInput.schema';
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentCreateNestedOneWithoutFollowUpInput>;
export const AppointmentCreateNestedOneWithoutFollowUpInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AppointmentCreateWithoutFollowUpInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutFollowUpInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutFollowUpInputObjectSchema).optional().optional(), connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional().optional()
}).strict() as SchemaType;

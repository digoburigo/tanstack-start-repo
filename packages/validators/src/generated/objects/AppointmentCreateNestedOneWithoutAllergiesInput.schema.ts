/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCreateWithoutAllergiesInputObjectSchema } from './AppointmentCreateWithoutAllergiesInput.schema';
import { AppointmentUncheckedCreateWithoutAllergiesInputObjectSchema } from './AppointmentUncheckedCreateWithoutAllergiesInput.schema';
import { AppointmentCreateOrConnectWithoutAllergiesInputObjectSchema } from './AppointmentCreateOrConnectWithoutAllergiesInput.schema';
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AppointmentCreateNestedOneWithoutAllergiesInput>;
export const AppointmentCreateNestedOneWithoutAllergiesInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AppointmentCreateWithoutAllergiesInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutAllergiesInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutAllergiesInputObjectSchema).optional().optional(), connect: z.lazy(() => AppointmentWhereUniqueInputObjectSchema).optional().optional()
}).strict() as SchemaType;

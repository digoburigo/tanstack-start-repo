/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';
import { AppointmentUpdateWithoutComorbiditiesInputObjectSchema } from './AppointmentUpdateWithoutComorbiditiesInput.schema';
import { AppointmentUncheckedUpdateWithoutComorbiditiesInputObjectSchema } from './AppointmentUncheckedUpdateWithoutComorbiditiesInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutComorbiditiesInput>;
export const AppointmentUpdateToOneWithWhereWithoutComorbiditiesInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AppointmentWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => AppointmentUpdateWithoutComorbiditiesInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutComorbiditiesInputObjectSchema)])
}).strict() as SchemaType;

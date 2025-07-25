/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentUpdateWithoutComorbiditiesInputObjectSchema } from './AppointmentUpdateWithoutComorbiditiesInput.schema';
import { AppointmentUncheckedUpdateWithoutComorbiditiesInputObjectSchema } from './AppointmentUncheckedUpdateWithoutComorbiditiesInput.schema';
import { AppointmentCreateWithoutComorbiditiesInputObjectSchema } from './AppointmentCreateWithoutComorbiditiesInput.schema';
import { AppointmentUncheckedCreateWithoutComorbiditiesInputObjectSchema } from './AppointmentUncheckedCreateWithoutComorbiditiesInput.schema';
import { AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AppointmentUpsertWithoutComorbiditiesInput>;
export const AppointmentUpsertWithoutComorbiditiesInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => AppointmentUpdateWithoutComorbiditiesInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateWithoutComorbiditiesInputObjectSchema)]), create: z.union([z.lazy(() => AppointmentCreateWithoutComorbiditiesInputObjectSchema), z.lazy(() => AppointmentUncheckedCreateWithoutComorbiditiesInputObjectSchema)]), where: z.lazy(() => AppointmentWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

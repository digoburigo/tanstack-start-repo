/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { CidWhereInputObjectSchema } from './CidWhereInput.schema';
import { CidUpdateWithoutAppointmentCidInputObjectSchema } from './CidUpdateWithoutAppointmentCidInput.schema';
import { CidUncheckedUpdateWithoutAppointmentCidInputObjectSchema } from './CidUncheckedUpdateWithoutAppointmentCidInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.CidUpdateToOneWithWhereWithoutAppointmentCidInput>;
export const CidUpdateToOneWithWhereWithoutAppointmentCidInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => CidWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => CidUpdateWithoutAppointmentCidInputObjectSchema), z.lazy(() => CidUncheckedUpdateWithoutAppointmentCidInputObjectSchema)])
}).strict() as SchemaType;

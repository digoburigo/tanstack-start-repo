/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesCreateManyAppointmentInputObjectSchema } from './ComorbiditiesCreateManyAppointmentInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesCreateManyAppointmentInputEnvelope>;
export const ComorbiditiesCreateManyAppointmentInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ComorbiditiesCreateManyAppointmentInputObjectSchema),
    z.lazy(() => ComorbiditiesCreateManyAppointmentInputObjectSchema).array()])
}).strict() as SchemaType;

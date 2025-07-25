/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCidCreateManyOrganizationInputObjectSchema } from './AppointmentCidCreateManyOrganizationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentCidCreateManyOrganizationInputEnvelope>;
export const AppointmentCidCreateManyOrganizationInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => AppointmentCidCreateManyOrganizationInputObjectSchema),
    z.lazy(() => AppointmentCidCreateManyOrganizationInputObjectSchema).array()])
}).strict() as SchemaType;

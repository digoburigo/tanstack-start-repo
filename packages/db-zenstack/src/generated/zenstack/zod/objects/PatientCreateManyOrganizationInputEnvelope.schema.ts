/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientCreateManyOrganizationInputObjectSchema } from './PatientCreateManyOrganizationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.PatientCreateManyOrganizationInputEnvelope>;
export const PatientCreateManyOrganizationInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PatientCreateManyOrganizationInputObjectSchema),
    z.lazy(() => PatientCreateManyOrganizationInputObjectSchema).array()])
}).strict() as SchemaType;

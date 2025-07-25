/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsCreateManyPatientInputObjectSchema } from './VaccinationsCreateManyPatientInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsCreateManyPatientInputEnvelope>;
export const VaccinationsCreateManyPatientInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => VaccinationsCreateManyPatientInputObjectSchema),
    z.lazy(() => VaccinationsCreateManyPatientInputObjectSchema).array()])
}).strict() as SchemaType;

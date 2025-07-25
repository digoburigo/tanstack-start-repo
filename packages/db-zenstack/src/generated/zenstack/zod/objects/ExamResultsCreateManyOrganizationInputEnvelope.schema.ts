/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsCreateManyOrganizationInputObjectSchema } from './ExamResultsCreateManyOrganizationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ExamResultsCreateManyOrganizationInputEnvelope>;
export const ExamResultsCreateManyOrganizationInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ExamResultsCreateManyOrganizationInputObjectSchema),
    z.lazy(() => ExamResultsCreateManyOrganizationInputObjectSchema).array()])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansCreateManyUpdatedByUserInputObjectSchema } from './HealthPlansCreateManyUpdatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.HealthPlansCreateManyUpdatedByUserInputEnvelope>;
export const HealthPlansCreateManyUpdatedByUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => HealthPlansCreateManyUpdatedByUserInputObjectSchema),
    z.lazy(() => HealthPlansCreateManyUpdatedByUserInputObjectSchema).array()])
}).strict() as SchemaType;

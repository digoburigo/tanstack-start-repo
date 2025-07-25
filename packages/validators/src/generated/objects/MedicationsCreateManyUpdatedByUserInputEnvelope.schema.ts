/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsCreateManyUpdatedByUserInputObjectSchema } from './MedicationsCreateManyUpdatedByUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MedicationsCreateManyUpdatedByUserInputEnvelope>;
export const MedicationsCreateManyUpdatedByUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => MedicationsCreateManyUpdatedByUserInputObjectSchema),
    z.lazy(() => MedicationsCreateManyUpdatedByUserInputObjectSchema).array()])
}).strict() as SchemaType;

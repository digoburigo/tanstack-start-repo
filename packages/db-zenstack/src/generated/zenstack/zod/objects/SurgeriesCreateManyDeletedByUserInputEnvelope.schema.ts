/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesCreateManyDeletedByUserInputObjectSchema } from './SurgeriesCreateManyDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.SurgeriesCreateManyDeletedByUserInputEnvelope>;
export const SurgeriesCreateManyDeletedByUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => SurgeriesCreateManyDeletedByUserInputObjectSchema),
    z.lazy(() => SurgeriesCreateManyDeletedByUserInputObjectSchema).array()])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesCreateManyComorbiditiesValuesInputObjectSchema } from './ComorbiditiesCreateManyComorbiditiesValuesInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesCreateManyComorbiditiesValuesInputEnvelope>;
export const ComorbiditiesCreateManyComorbiditiesValuesInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => ComorbiditiesCreateManyComorbiditiesValuesInputObjectSchema),
    z.lazy(() => ComorbiditiesCreateManyComorbiditiesValuesInputObjectSchema).array()])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationCreateManyDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateManyDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationCreateManyDeletedByUserInputEnvelope>;
export const DefaultObjectiveInformationCreateManyDeletedByUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => DefaultObjectiveInformationCreateManyDeletedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationCreateManyDeletedByUserInputObjectSchema).array()])
}).strict() as SchemaType;

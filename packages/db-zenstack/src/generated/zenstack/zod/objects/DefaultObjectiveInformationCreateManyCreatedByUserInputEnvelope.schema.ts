/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationCreateManyCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateManyCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationCreateManyCreatedByUserInputEnvelope>;
export const DefaultObjectiveInformationCreateManyCreatedByUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => DefaultObjectiveInformationCreateManyCreatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationCreateManyCreatedByUserInputObjectSchema).array()])
}).strict() as SchemaType;

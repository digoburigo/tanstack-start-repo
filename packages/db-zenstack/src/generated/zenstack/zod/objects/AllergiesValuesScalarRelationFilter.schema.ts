/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesValuesWhereInputObjectSchema } from './AllergiesValuesWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesValuesScalarRelationFilter>;
export const AllergiesValuesScalarRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => AllergiesValuesWhereInputObjectSchema).optional().optional(), isNot: z.lazy(() => AllergiesValuesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

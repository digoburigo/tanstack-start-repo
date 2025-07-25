/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesWhereInputObjectSchema } from './AllergiesWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AllergiesListRelationFilter>;
export const AllergiesListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => AllergiesWhereInputObjectSchema).optional().optional(), some: z.lazy(() => AllergiesWhereInputObjectSchema).optional().optional(), none: z.lazy(() => AllergiesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

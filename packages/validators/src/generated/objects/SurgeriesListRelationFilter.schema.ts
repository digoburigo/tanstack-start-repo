/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesWhereInputObjectSchema } from './SurgeriesWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.SurgeriesListRelationFilter>;
export const SurgeriesListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => SurgeriesWhereInputObjectSchema).optional().optional(), some: z.lazy(() => SurgeriesWhereInputObjectSchema).optional().optional(), none: z.lazy(() => SurgeriesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansValuesWhereInputObjectSchema } from './HealthPlansValuesWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansValuesScalarRelationFilter>;
export const HealthPlansValuesScalarRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => HealthPlansValuesWhereInputObjectSchema).optional().optional(), isNot: z.lazy(() => HealthPlansValuesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

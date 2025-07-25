/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansInputSchema } from '../input/HealthPlansInput.schema';
import { HealthPlansValuesCountOutputTypeDefaultArgsObjectSchema } from './HealthPlansValuesCountOutputTypeDefaultArgs.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansValuesSelect>;
export const HealthPlansValuesSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional().optional(), value: z.boolean().optional().optional(), createdAt: z.boolean().optional().optional(), healthPlans: z.union([z.boolean(),
    z.lazy(() => HealthPlansInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => HealthPlansValuesCountOutputTypeDefaultArgsObjectSchema)]).optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsValuesCreateManyInput>;
export const MedicationsValuesCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), value: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional()
}).strict() as SchemaType;

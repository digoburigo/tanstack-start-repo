/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesUncheckedCreateNestedManyWithoutAllergiesValuesInputObjectSchema } from './AllergiesUncheckedCreateNestedManyWithoutAllergiesValuesInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesValuesUncheckedCreateInput>;
export const AllergiesValuesUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), value: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), allergies: z.lazy(() => AllergiesUncheckedCreateNestedManyWithoutAllergiesValuesInputObjectSchema).optional().optional()
}).strict() as SchemaType;

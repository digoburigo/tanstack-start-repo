/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsValuesCountOutputTypeSelectObjectSchema } from './ExamResultsValuesCountOutputTypeSelect.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ExamResultsValuesCountOutputTypeDefaultArgs>;
export const ExamResultsValuesCountOutputTypeDefaultArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ExamResultsValuesCountOutputTypeSelectObjectSchema).optional().optional()
}).strict() as SchemaType;

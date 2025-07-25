/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsValuesWhereUniqueInputObjectSchema } from './ExamResultsValuesWhereUniqueInput.schema';
import { ExamResultsValuesCreateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesCreateWithoutExamResultsInput.schema';
import { ExamResultsValuesUncheckedCreateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUncheckedCreateWithoutExamResultsInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ExamResultsValuesCreateOrConnectWithoutExamResultsInput>;
export const ExamResultsValuesCreateOrConnectWithoutExamResultsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ExamResultsValuesWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ExamResultsValuesCreateWithoutExamResultsInputObjectSchema), z.lazy(() => ExamResultsValuesUncheckedCreateWithoutExamResultsInputObjectSchema)])
}).strict() as SchemaType;

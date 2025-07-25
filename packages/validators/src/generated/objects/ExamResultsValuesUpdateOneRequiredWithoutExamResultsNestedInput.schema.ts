/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsValuesCreateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesCreateWithoutExamResultsInput.schema';
import { ExamResultsValuesUncheckedCreateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUncheckedCreateWithoutExamResultsInput.schema';
import { ExamResultsValuesCreateOrConnectWithoutExamResultsInputObjectSchema } from './ExamResultsValuesCreateOrConnectWithoutExamResultsInput.schema';
import { ExamResultsValuesUpsertWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUpsertWithoutExamResultsInput.schema';
import { ExamResultsValuesWhereUniqueInputObjectSchema } from './ExamResultsValuesWhereUniqueInput.schema';
import { ExamResultsValuesUpdateToOneWithWhereWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUpdateToOneWithWhereWithoutExamResultsInput.schema';
import { ExamResultsValuesUpdateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUpdateWithoutExamResultsInput.schema';
import { ExamResultsValuesUncheckedUpdateWithoutExamResultsInputObjectSchema } from './ExamResultsValuesUncheckedUpdateWithoutExamResultsInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ExamResultsValuesUpdateOneRequiredWithoutExamResultsNestedInput>;
export const ExamResultsValuesUpdateOneRequiredWithoutExamResultsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ExamResultsValuesCreateWithoutExamResultsInputObjectSchema), z.lazy(() => ExamResultsValuesUncheckedCreateWithoutExamResultsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ExamResultsValuesCreateOrConnectWithoutExamResultsInputObjectSchema).optional().optional(), upsert: z.lazy(() => ExamResultsValuesUpsertWithoutExamResultsInputObjectSchema).optional().optional(), connect: z.lazy(() => ExamResultsValuesWhereUniqueInputObjectSchema).optional().optional(), update: z.union([z.lazy(() => ExamResultsValuesUpdateToOneWithWhereWithoutExamResultsInputObjectSchema), z.lazy(() => ExamResultsValuesUpdateWithoutExamResultsInputObjectSchema), z.lazy(() => ExamResultsValuesUncheckedUpdateWithoutExamResultsInputObjectSchema)]).optional()
}).strict() as SchemaType;

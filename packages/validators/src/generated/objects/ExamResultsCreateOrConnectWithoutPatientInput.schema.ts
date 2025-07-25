/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ExamResultsWhereUniqueInputObjectSchema } from './ExamResultsWhereUniqueInput.schema';
import { ExamResultsCreateWithoutPatientInputObjectSchema } from './ExamResultsCreateWithoutPatientInput.schema';
import { ExamResultsUncheckedCreateWithoutPatientInputObjectSchema } from './ExamResultsUncheckedCreateWithoutPatientInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ExamResultsCreateOrConnectWithoutPatientInput>;
export const ExamResultsCreateOrConnectWithoutPatientInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ExamResultsWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ExamResultsCreateWithoutPatientInputObjectSchema), z.lazy(() => ExamResultsUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict() as SchemaType;

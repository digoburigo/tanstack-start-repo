/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientCreateWithoutExamResultsInputObjectSchema } from './PatientCreateWithoutExamResultsInput.schema';
import { PatientUncheckedCreateWithoutExamResultsInputObjectSchema } from './PatientUncheckedCreateWithoutExamResultsInput.schema';
import { PatientCreateOrConnectWithoutExamResultsInputObjectSchema } from './PatientCreateOrConnectWithoutExamResultsInput.schema';
import { PatientUpsertWithoutExamResultsInputObjectSchema } from './PatientUpsertWithoutExamResultsInput.schema';
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutExamResultsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutExamResultsInput.schema';
import { PatientUpdateWithoutExamResultsInputObjectSchema } from './PatientUpdateWithoutExamResultsInput.schema';
import { PatientUncheckedUpdateWithoutExamResultsInputObjectSchema } from './PatientUncheckedUpdateWithoutExamResultsInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.PatientUpdateOneRequiredWithoutExamResultsNestedInput>;
export const PatientUpdateOneRequiredWithoutExamResultsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PatientCreateWithoutExamResultsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutExamResultsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutExamResultsInputObjectSchema).optional().optional(), upsert: z.lazy(() => PatientUpsertWithoutExamResultsInputObjectSchema).optional().optional(), connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional().optional(), update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutExamResultsInputObjectSchema), z.lazy(() => PatientUpdateWithoutExamResultsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutExamResultsInputObjectSchema)]).optional()
}).strict() as SchemaType;

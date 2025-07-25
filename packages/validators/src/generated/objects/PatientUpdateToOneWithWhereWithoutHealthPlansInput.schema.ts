/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutHealthPlansInputObjectSchema } from './PatientUpdateWithoutHealthPlansInput.schema';
import { PatientUncheckedUpdateWithoutHealthPlansInputObjectSchema } from './PatientUncheckedUpdateWithoutHealthPlansInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutHealthPlansInput>;
export const PatientUpdateToOneWithWhereWithoutHealthPlansInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PatientWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => PatientUpdateWithoutHealthPlansInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutHealthPlansInputObjectSchema)])
}).strict() as SchemaType;

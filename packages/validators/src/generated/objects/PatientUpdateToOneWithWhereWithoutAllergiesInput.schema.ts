/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutAllergiesInputObjectSchema } from './PatientUpdateWithoutAllergiesInput.schema';
import { PatientUncheckedUpdateWithoutAllergiesInputObjectSchema } from './PatientUncheckedUpdateWithoutAllergiesInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutAllergiesInput>;
export const PatientUpdateToOneWithWhereWithoutAllergiesInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PatientWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => PatientUpdateWithoutAllergiesInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutAllergiesInputObjectSchema)])
}).strict() as SchemaType;

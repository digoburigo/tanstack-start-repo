/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesValuesUpdateWithoutAllergiesInputObjectSchema } from './AllergiesValuesUpdateWithoutAllergiesInput.schema';
import { AllergiesValuesUncheckedUpdateWithoutAllergiesInputObjectSchema } from './AllergiesValuesUncheckedUpdateWithoutAllergiesInput.schema';
import { AllergiesValuesCreateWithoutAllergiesInputObjectSchema } from './AllergiesValuesCreateWithoutAllergiesInput.schema';
import { AllergiesValuesUncheckedCreateWithoutAllergiesInputObjectSchema } from './AllergiesValuesUncheckedCreateWithoutAllergiesInput.schema';
import { AllergiesValuesWhereInputObjectSchema } from './AllergiesValuesWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AllergiesValuesUpsertWithoutAllergiesInput>;
export const AllergiesValuesUpsertWithoutAllergiesInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => AllergiesValuesUpdateWithoutAllergiesInputObjectSchema), z.lazy(() => AllergiesValuesUncheckedUpdateWithoutAllergiesInputObjectSchema)]), create: z.union([z.lazy(() => AllergiesValuesCreateWithoutAllergiesInputObjectSchema), z.lazy(() => AllergiesValuesUncheckedCreateWithoutAllergiesInputObjectSchema)]), where: z.lazy(() => AllergiesValuesWhereInputObjectSchema).optional().optional()
}).strict() as SchemaType;

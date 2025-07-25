/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesWhereUniqueInputObjectSchema } from './AllergiesWhereUniqueInput.schema';
import { AllergiesUpdateWithoutCreatedByUserInputObjectSchema } from './AllergiesUpdateWithoutCreatedByUserInput.schema';
import { AllergiesUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './AllergiesUncheckedUpdateWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const AllergiesUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AllergiesWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AllergiesUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => AllergiesUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

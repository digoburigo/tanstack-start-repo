/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesValuesWhereInputObjectSchema } from './SurgeriesValuesWhereInput.schema';
import { SurgeriesValuesUpdateWithoutSurgeriesInputObjectSchema } from './SurgeriesValuesUpdateWithoutSurgeriesInput.schema';
import { SurgeriesValuesUncheckedUpdateWithoutSurgeriesInputObjectSchema } from './SurgeriesValuesUncheckedUpdateWithoutSurgeriesInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.SurgeriesValuesUpdateToOneWithWhereWithoutSurgeriesInput>;
export const SurgeriesValuesUpdateToOneWithWhereWithoutSurgeriesInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SurgeriesValuesWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => SurgeriesValuesUpdateWithoutSurgeriesInputObjectSchema), z.lazy(() => SurgeriesValuesUncheckedUpdateWithoutSurgeriesInputObjectSchema)])
}).strict() as SchemaType;

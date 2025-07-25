/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesScalarWhereInputObjectSchema } from './SurgeriesScalarWhereInput.schema';
import { SurgeriesUpdateManyMutationInputObjectSchema } from './SurgeriesUpdateManyMutationInput.schema';
import { SurgeriesUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './SurgeriesUncheckedUpdateManyWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.SurgeriesUpdateManyWithWhereWithoutCreatedByUserInput>;
export const SurgeriesUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SurgeriesScalarWhereInputObjectSchema), data: z.union([z.lazy(() => SurgeriesUpdateManyMutationInputObjectSchema), z.lazy(() => SurgeriesUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

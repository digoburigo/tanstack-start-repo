/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesWhereUniqueInputObjectSchema } from './SurgeriesWhereUniqueInput.schema';
import { SurgeriesCreateWithoutDeletedByUserInputObjectSchema } from './SurgeriesCreateWithoutDeletedByUserInput.schema';
import { SurgeriesUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './SurgeriesUncheckedCreateWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.SurgeriesCreateOrConnectWithoutDeletedByUserInput>;
export const SurgeriesCreateOrConnectWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SurgeriesWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => SurgeriesCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => SurgeriesUncheckedCreateWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

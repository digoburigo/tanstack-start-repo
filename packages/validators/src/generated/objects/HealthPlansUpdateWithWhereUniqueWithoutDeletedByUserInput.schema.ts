/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansWhereUniqueInputObjectSchema } from './HealthPlansWhereUniqueInput.schema';
import { HealthPlansUpdateWithoutDeletedByUserInputObjectSchema } from './HealthPlansUpdateWithoutDeletedByUserInput.schema';
import { HealthPlansUncheckedUpdateWithoutDeletedByUserInputObjectSchema } from './HealthPlansUncheckedUpdateWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansUpdateWithWhereUniqueWithoutDeletedByUserInput>;
export const HealthPlansUpdateWithWhereUniqueWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HealthPlansWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => HealthPlansUpdateWithoutDeletedByUserInputObjectSchema), z.lazy(() => HealthPlansUncheckedUpdateWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

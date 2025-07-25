/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansScalarWhereInputObjectSchema } from './HealthPlansScalarWhereInput.schema';
import { HealthPlansUpdateManyMutationInputObjectSchema } from './HealthPlansUpdateManyMutationInput.schema';
import { HealthPlansUncheckedUpdateManyWithoutDeletedByUserInputObjectSchema } from './HealthPlansUncheckedUpdateManyWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.HealthPlansUpdateManyWithWhereWithoutDeletedByUserInput>;
export const HealthPlansUpdateManyWithWhereWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HealthPlansScalarWhereInputObjectSchema), data: z.union([z.lazy(() => HealthPlansUpdateManyMutationInputObjectSchema), z.lazy(() => HealthPlansUncheckedUpdateManyWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

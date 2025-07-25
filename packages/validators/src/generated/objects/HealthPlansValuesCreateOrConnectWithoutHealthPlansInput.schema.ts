/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansValuesWhereUniqueInputObjectSchema } from './HealthPlansValuesWhereUniqueInput.schema';
import { HealthPlansValuesCreateWithoutHealthPlansInputObjectSchema } from './HealthPlansValuesCreateWithoutHealthPlansInput.schema';
import { HealthPlansValuesUncheckedCreateWithoutHealthPlansInputObjectSchema } from './HealthPlansValuesUncheckedCreateWithoutHealthPlansInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansValuesCreateOrConnectWithoutHealthPlansInput>;
export const HealthPlansValuesCreateOrConnectWithoutHealthPlansInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HealthPlansValuesWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => HealthPlansValuesCreateWithoutHealthPlansInputObjectSchema), z.lazy(() => HealthPlansValuesUncheckedCreateWithoutHealthPlansInputObjectSchema)])
}).strict() as SchemaType;

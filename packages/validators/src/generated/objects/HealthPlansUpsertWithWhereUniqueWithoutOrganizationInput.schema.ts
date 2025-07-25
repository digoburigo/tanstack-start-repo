/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansWhereUniqueInputObjectSchema } from './HealthPlansWhereUniqueInput.schema';
import { HealthPlansUpdateWithoutOrganizationInputObjectSchema } from './HealthPlansUpdateWithoutOrganizationInput.schema';
import { HealthPlansUncheckedUpdateWithoutOrganizationInputObjectSchema } from './HealthPlansUncheckedUpdateWithoutOrganizationInput.schema';
import { HealthPlansCreateWithoutOrganizationInputObjectSchema } from './HealthPlansCreateWithoutOrganizationInput.schema';
import { HealthPlansUncheckedCreateWithoutOrganizationInputObjectSchema } from './HealthPlansUncheckedCreateWithoutOrganizationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansUpsertWithWhereUniqueWithoutOrganizationInput>;
export const HealthPlansUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HealthPlansWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => HealthPlansUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => HealthPlansUncheckedUpdateWithoutOrganizationInputObjectSchema)]), create: z.union([z.lazy(() => HealthPlansCreateWithoutOrganizationInputObjectSchema), z.lazy(() => HealthPlansUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

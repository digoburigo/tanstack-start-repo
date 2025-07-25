/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { HealthPlansWhereUniqueInputObjectSchema } from './HealthPlansWhereUniqueInput.schema';
import { HealthPlansUpdateWithoutOrganizationInputObjectSchema } from './HealthPlansUpdateWithoutOrganizationInput.schema';
import { HealthPlansUncheckedUpdateWithoutOrganizationInputObjectSchema } from './HealthPlansUncheckedUpdateWithoutOrganizationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.HealthPlansUpdateWithWhereUniqueWithoutOrganizationInput>;
export const HealthPlansUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => HealthPlansWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => HealthPlansUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => HealthPlansUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SurgeriesWhereUniqueInputObjectSchema } from './SurgeriesWhereUniqueInput.schema';
import { SurgeriesCreateWithoutOrganizationInputObjectSchema } from './SurgeriesCreateWithoutOrganizationInput.schema';
import { SurgeriesUncheckedCreateWithoutOrganizationInputObjectSchema } from './SurgeriesUncheckedCreateWithoutOrganizationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.SurgeriesCreateOrConnectWithoutOrganizationInput>;
export const SurgeriesCreateOrConnectWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => SurgeriesWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => SurgeriesCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SurgeriesUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

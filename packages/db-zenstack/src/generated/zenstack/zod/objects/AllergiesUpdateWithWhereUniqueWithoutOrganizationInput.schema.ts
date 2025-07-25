/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesWhereUniqueInputObjectSchema } from './AllergiesWhereUniqueInput.schema';
import { AllergiesUpdateWithoutOrganizationInputObjectSchema } from './AllergiesUpdateWithoutOrganizationInput.schema';
import { AllergiesUncheckedUpdateWithoutOrganizationInputObjectSchema } from './AllergiesUncheckedUpdateWithoutOrganizationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesUpdateWithWhereUniqueWithoutOrganizationInput>;
export const AllergiesUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AllergiesWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AllergiesUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => AllergiesUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

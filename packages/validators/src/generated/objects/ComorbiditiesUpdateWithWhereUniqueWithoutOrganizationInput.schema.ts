/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesWhereUniqueInputObjectSchema } from './ComorbiditiesWhereUniqueInput.schema';
import { ComorbiditiesUpdateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUpdateWithoutOrganizationInput.schema';
import { ComorbiditiesUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUncheckedUpdateWithoutOrganizationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInput>;
export const ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => ComorbiditiesUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

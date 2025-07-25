/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesWhereUniqueInputObjectSchema } from './ComorbiditiesWhereUniqueInput.schema';
import { ComorbiditiesUpdateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUpdateWithoutOrganizationInput.schema';
import { ComorbiditiesUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUncheckedUpdateWithoutOrganizationInput.schema';
import { ComorbiditiesCreateWithoutOrganizationInputObjectSchema } from './ComorbiditiesCreateWithoutOrganizationInput.schema';
import { ComorbiditiesUncheckedCreateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUncheckedCreateWithoutOrganizationInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInput>;
export const ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ComorbiditiesUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedUpdateWithoutOrganizationInputObjectSchema)]), create: z.union([z.lazy(() => ComorbiditiesCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { RaceSchema } from '../enums/Race.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.NestedEnumRaceNullableFilter>;
export const NestedEnumRaceNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => RaceSchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => RaceSchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => RaceSchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => RaceSchema),
    z.lazy(() => NestedEnumRaceNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;

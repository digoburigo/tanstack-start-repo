/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { GenderIdentitySchema } from '../enums/GenderIdentity.schema';
import { NestedEnumGenderIdentityNullableFilterObjectSchema } from './NestedEnumGenderIdentityNullableFilter.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.EnumGenderIdentityNullableFilter>;
export const EnumGenderIdentityNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => GenderIdentitySchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => GenderIdentitySchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => GenderIdentitySchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => GenderIdentitySchema),
    z.lazy(() => NestedEnumGenderIdentityNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;

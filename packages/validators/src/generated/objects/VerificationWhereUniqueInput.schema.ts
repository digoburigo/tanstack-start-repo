/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VerificationWhereInputObjectSchema } from './VerificationWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.VerificationWhereUniqueInput>;
export const VerificationWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), AND: z.union([z.lazy(() => VerificationWhereInputObjectSchema),
    z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => VerificationWhereInputObjectSchema).array().optional().optional(), NOT: z.union([z.lazy(() => VerificationWhereInputObjectSchema),
    z.lazy(() => VerificationWhereInputObjectSchema).array()]).optional(), identifier: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), value: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;

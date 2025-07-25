/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCategorySchema } from '../enums/AppointmentCategory.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumAppointmentCategoryNullableFilterObjectSchema } from './NestedEnumAppointmentCategoryNullableFilter.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.NestedEnumAppointmentCategoryNullableWithAggregatesFilter>;
export const NestedEnumAppointmentCategoryNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.lazy(() => AppointmentCategorySchema),
    z.null()]).optional().nullable(), in: z.union([z.lazy(() => AppointmentCategorySchema).array(),
    z.null()]).optional().nullable(), notIn: z.union([z.lazy(() => AppointmentCategorySchema).array(),
    z.null()]).optional().nullable(), not: z.union([z.lazy(() => AppointmentCategorySchema),
    z.lazy(() => NestedEnumAppointmentCategoryNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional().optional(), _min: z.lazy(() => NestedEnumAppointmentCategoryNullableFilterObjectSchema).optional().optional(), _max: z.lazy(() => NestedEnumAppointmentCategoryNullableFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

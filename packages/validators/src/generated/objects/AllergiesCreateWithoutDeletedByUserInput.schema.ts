/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserCreateWithoutCreatedAssetsInputObjectSchema } from './UserCreateWithoutCreatedAssetsInput.schema';
import { UserCreateWithoutUpdatedAssetsInputObjectSchema } from './UserCreateWithoutUpdatedAssetsInput.schema';
import { OrganizationCreateWithoutAssetsInputObjectSchema } from './OrganizationCreateWithoutAssetsInput.schema';
import { PatientCreateNestedOneWithoutAllergiesInputObjectSchema } from './PatientCreateNestedOneWithoutAllergiesInput.schema';
import { AllergiesValuesCreateNestedOneWithoutAllergiesInputObjectSchema } from './AllergiesValuesCreateNestedOneWithoutAllergiesInput.schema';
import { AppointmentCreateNestedOneWithoutAllergiesInputObjectSchema } from './AppointmentCreateNestedOneWithoutAllergiesInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AllergiesCreateWithoutDeletedByUserInput>;
export const AllergiesCreateWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), deletedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), deleted: z.boolean().optional().optional(), createdByUser: z.lazy(() => UserCreateWithoutCreatedAssetsInputObjectSchema).optional().optional(), updatedByUser: z.lazy(() => UserCreateWithoutUpdatedAssetsInputObjectSchema).optional().optional(), organization: z.lazy(() => OrganizationCreateWithoutAssetsInputObjectSchema).optional().optional(), patient: z.lazy(() => PatientCreateNestedOneWithoutAllergiesInputObjectSchema).optional().optional(), allergiesValues: z.lazy(() => AllergiesValuesCreateNestedOneWithoutAllergiesInputObjectSchema), appointment: z.lazy(() => AppointmentCreateNestedOneWithoutAllergiesInputObjectSchema).optional().optional()
}).strict() as SchemaType;

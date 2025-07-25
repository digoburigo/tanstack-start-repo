/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserCreateWithoutCreatedAssetsInputObjectSchema } from './UserCreateWithoutCreatedAssetsInput.schema';
import { UserCreateWithoutUpdatedAssetsInputObjectSchema } from './UserCreateWithoutUpdatedAssetsInput.schema';
import { OrganizationCreateWithoutAssetsInputObjectSchema } from './OrganizationCreateWithoutAssetsInput.schema';
import { PatientCreateNestedOneWithoutMedicationsInputObjectSchema } from './PatientCreateNestedOneWithoutMedicationsInput.schema';
import { MedicationsValuesCreateNestedOneWithoutMedicationsInputObjectSchema } from './MedicationsValuesCreateNestedOneWithoutMedicationsInput.schema';
import { AppointmentCreateNestedOneWithoutMedicationsInputObjectSchema } from './AppointmentCreateNestedOneWithoutMedicationsInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MedicationsCreateWithoutDeletedByUserInput>;
export const MedicationsCreateWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), deletedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), deleted: z.boolean().optional().optional(), createdByUser: z.lazy(() => UserCreateWithoutCreatedAssetsInputObjectSchema).optional().optional(), updatedByUser: z.lazy(() => UserCreateWithoutUpdatedAssetsInputObjectSchema).optional().optional(), organization: z.lazy(() => OrganizationCreateWithoutAssetsInputObjectSchema).optional().optional(), patient: z.lazy(() => PatientCreateNestedOneWithoutMedicationsInputObjectSchema).optional().optional(), medicationsValues: z.lazy(() => MedicationsValuesCreateNestedOneWithoutMedicationsInputObjectSchema), appointment: z.lazy(() => AppointmentCreateNestedOneWithoutMedicationsInputObjectSchema).optional().optional()
}).strict() as SchemaType;

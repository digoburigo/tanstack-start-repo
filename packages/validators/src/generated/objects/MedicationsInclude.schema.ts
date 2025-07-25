/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserDefaultArgsObjectSchema } from './UserDefaultArgs.schema';
import { OrganizationDefaultArgsObjectSchema } from './OrganizationDefaultArgs.schema';
import { PatientDefaultArgsObjectSchema } from './PatientDefaultArgs.schema';
import { MedicationsValuesDefaultArgsObjectSchema } from './MedicationsValuesDefaultArgs.schema';
import { AppointmentDefaultArgsObjectSchema } from './AppointmentDefaultArgs.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MedicationsInclude>;
export const MedicationsIncludeObjectSchema: SchemaType = z.object({
    createdByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), updatedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), deletedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), organization: z.union([z.boolean(),
    z.lazy(() => OrganizationDefaultArgsObjectSchema)]).optional(), patient: z.union([z.boolean(),
    z.lazy(() => PatientDefaultArgsObjectSchema)]).optional(), medicationsValues: z.union([z.boolean(),
    z.lazy(() => MedicationsValuesDefaultArgsObjectSchema)]).optional(), appointment: z.union([z.boolean(),
    z.lazy(() => AppointmentDefaultArgsObjectSchema)]).optional()
}).strict() as SchemaType;

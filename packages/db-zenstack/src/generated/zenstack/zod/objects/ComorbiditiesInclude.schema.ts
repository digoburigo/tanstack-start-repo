/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserDefaultArgsObjectSchema } from './UserDefaultArgs.schema';
import { OrganizationDefaultArgsObjectSchema } from './OrganizationDefaultArgs.schema';
import { PatientDefaultArgsObjectSchema } from './PatientDefaultArgs.schema';
import { ComorbiditiesValuesDefaultArgsObjectSchema } from './ComorbiditiesValuesDefaultArgs.schema';
import { AppointmentDefaultArgsObjectSchema } from './AppointmentDefaultArgs.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesInclude>;
export const ComorbiditiesIncludeObjectSchema: SchemaType = z.object({
    createdByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), updatedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), deletedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), organization: z.union([z.boolean(),
    z.lazy(() => OrganizationDefaultArgsObjectSchema)]).optional(), patient: z.union([z.boolean(),
    z.lazy(() => PatientDefaultArgsObjectSchema)]).optional(), comorbiditiesValues: z.union([z.boolean(),
    z.lazy(() => ComorbiditiesValuesDefaultArgsObjectSchema)]).optional(), appointment: z.union([z.boolean(),
    z.lazy(() => AppointmentDefaultArgsObjectSchema)]).optional()
}).strict() as SchemaType;

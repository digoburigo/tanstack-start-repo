/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema';
import { AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema';
import { AppointmentUncheckedUpdateManyWithoutUpdatedByUserInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutUpdatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutUpdatedByUserInput>;
export const AppointmentUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AppointmentScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema), z.lazy(() => AppointmentUncheckedUpdateManyWithoutUpdatedByUserInputObjectSchema)])
}).strict() as SchemaType;

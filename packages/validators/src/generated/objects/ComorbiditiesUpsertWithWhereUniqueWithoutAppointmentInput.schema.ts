/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesWhereUniqueInputObjectSchema } from './ComorbiditiesWhereUniqueInput.schema';
import { ComorbiditiesUpdateWithoutAppointmentInputObjectSchema } from './ComorbiditiesUpdateWithoutAppointmentInput.schema';
import { ComorbiditiesUncheckedUpdateWithoutAppointmentInputObjectSchema } from './ComorbiditiesUncheckedUpdateWithoutAppointmentInput.schema';
import { ComorbiditiesCreateWithoutAppointmentInputObjectSchema } from './ComorbiditiesCreateWithoutAppointmentInput.schema';
import { ComorbiditiesUncheckedCreateWithoutAppointmentInputObjectSchema } from './ComorbiditiesUncheckedCreateWithoutAppointmentInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpsertWithWhereUniqueWithoutAppointmentInput>;
export const ComorbiditiesUpsertWithWhereUniqueWithoutAppointmentInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => ComorbiditiesUpdateWithoutAppointmentInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedUpdateWithoutAppointmentInputObjectSchema)]), create: z.union([z.lazy(() => ComorbiditiesCreateWithoutAppointmentInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedCreateWithoutAppointmentInputObjectSchema)])
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCidCreateWithoutDeletedByUserInputObjectSchema } from './AppointmentCidCreateWithoutDeletedByUserInput.schema';
import { AppointmentCidUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './AppointmentCidUncheckedCreateWithoutDeletedByUserInput.schema';
import { AppointmentCidCreateOrConnectWithoutDeletedByUserInputObjectSchema } from './AppointmentCidCreateOrConnectWithoutDeletedByUserInput.schema';
import { AppointmentCidCreateManyDeletedByUserInputEnvelopeObjectSchema } from './AppointmentCidCreateManyDeletedByUserInputEnvelope.schema';
import { AppointmentCidWhereUniqueInputObjectSchema } from './AppointmentCidWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.AppointmentCidUncheckedCreateNestedManyWithoutDeletedByUserInput>;
export const AppointmentCidUncheckedCreateNestedManyWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AppointmentCidCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => AppointmentCidCreateWithoutDeletedByUserInputObjectSchema).array(), z.lazy(() => AppointmentCidUncheckedCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => AppointmentCidUncheckedCreateWithoutDeletedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AppointmentCidCreateOrConnectWithoutDeletedByUserInputObjectSchema),
    z.lazy(() => AppointmentCidCreateOrConnectWithoutDeletedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AppointmentCidCreateManyDeletedByUserInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema),
    z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

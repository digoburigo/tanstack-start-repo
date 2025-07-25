/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AppointmentCidCreateWithoutOrganizationInputObjectSchema } from './AppointmentCidCreateWithoutOrganizationInput.schema';
import { AppointmentCidUncheckedCreateWithoutOrganizationInputObjectSchema } from './AppointmentCidUncheckedCreateWithoutOrganizationInput.schema';
import { AppointmentCidCreateOrConnectWithoutOrganizationInputObjectSchema } from './AppointmentCidCreateOrConnectWithoutOrganizationInput.schema';
import { AppointmentCidUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AppointmentCidUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { AppointmentCidCreateManyOrganizationInputEnvelopeObjectSchema } from './AppointmentCidCreateManyOrganizationInputEnvelope.schema';
import { AppointmentCidWhereUniqueInputObjectSchema } from './AppointmentCidWhereUniqueInput.schema';
import { AppointmentCidUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AppointmentCidUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { AppointmentCidUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './AppointmentCidUpdateManyWithWhereWithoutOrganizationInput.schema';
import { AppointmentCidScalarWhereInputObjectSchema } from './AppointmentCidScalarWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AppointmentCidUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const AppointmentCidUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AppointmentCidCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AppointmentCidCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => AppointmentCidUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AppointmentCidUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AppointmentCidCreateOrConnectWithoutOrganizationInputObjectSchema),
    z.lazy(() => AppointmentCidCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => AppointmentCidUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => AppointmentCidUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AppointmentCidCreateManyOrganizationInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema),
    z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema),
    z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema),
    z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema),
    z.lazy(() => AppointmentCidWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => AppointmentCidUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => AppointmentCidUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => AppointmentCidUpdateManyWithWhereWithoutOrganizationInputObjectSchema),
    z.lazy(() => AppointmentCidUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => AppointmentCidScalarWhereInputObjectSchema),
    z.lazy(() => AppointmentCidScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

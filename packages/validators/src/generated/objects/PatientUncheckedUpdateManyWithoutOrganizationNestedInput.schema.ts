/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { PatientCreateWithoutOrganizationInputObjectSchema } from './PatientCreateWithoutOrganizationInput.schema';
import { PatientUncheckedCreateWithoutOrganizationInputObjectSchema } from './PatientUncheckedCreateWithoutOrganizationInput.schema';
import { PatientCreateOrConnectWithoutOrganizationInputObjectSchema } from './PatientCreateOrConnectWithoutOrganizationInput.schema';
import { PatientUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './PatientUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { PatientCreateManyOrganizationInputEnvelopeObjectSchema } from './PatientCreateManyOrganizationInputEnvelope.schema';
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './PatientUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { PatientUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './PatientUpdateManyWithWhereWithoutOrganizationInput.schema';
import { PatientScalarWhereInputObjectSchema } from './PatientScalarWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const PatientUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PatientCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PatientCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PatientCreateOrConnectWithoutOrganizationInputObjectSchema),
    z.lazy(() => PatientCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PatientUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => PatientUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PatientCreateManyOrganizationInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema),
    z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema),
    z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema),
    z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema),
    z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PatientUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => PatientUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PatientUpdateManyWithWhereWithoutOrganizationInputObjectSchema),
    z.lazy(() => PatientUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PatientScalarWhereInputObjectSchema),
    z.lazy(() => PatientScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MedicationsCreateWithoutOrganizationInputObjectSchema } from './MedicationsCreateWithoutOrganizationInput.schema';
import { MedicationsUncheckedCreateWithoutOrganizationInputObjectSchema } from './MedicationsUncheckedCreateWithoutOrganizationInput.schema';
import { MedicationsCreateOrConnectWithoutOrganizationInputObjectSchema } from './MedicationsCreateOrConnectWithoutOrganizationInput.schema';
import { MedicationsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './MedicationsUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { MedicationsCreateManyOrganizationInputEnvelopeObjectSchema } from './MedicationsCreateManyOrganizationInputEnvelope.schema';
import { MedicationsWhereUniqueInputObjectSchema } from './MedicationsWhereUniqueInput.schema';
import { MedicationsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './MedicationsUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { MedicationsUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './MedicationsUpdateManyWithWhereWithoutOrganizationInput.schema';
import { MedicationsScalarWhereInputObjectSchema } from './MedicationsScalarWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.MedicationsUpdateManyWithoutOrganizationNestedInput>;
export const MedicationsUpdateManyWithoutOrganizationNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => MedicationsCreateWithoutOrganizationInputObjectSchema), z.lazy(() => MedicationsCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => MedicationsUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => MedicationsUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => MedicationsCreateOrConnectWithoutOrganizationInputObjectSchema),
    z.lazy(() => MedicationsCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => MedicationsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => MedicationsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), createMany: z.lazy(() => MedicationsCreateManyOrganizationInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => MedicationsWhereUniqueInputObjectSchema),
    z.lazy(() => MedicationsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => MedicationsWhereUniqueInputObjectSchema),
    z.lazy(() => MedicationsWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => MedicationsWhereUniqueInputObjectSchema),
    z.lazy(() => MedicationsWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => MedicationsWhereUniqueInputObjectSchema),
    z.lazy(() => MedicationsWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => MedicationsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => MedicationsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => MedicationsUpdateManyWithWhereWithoutOrganizationInputObjectSchema),
    z.lazy(() => MedicationsUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => MedicationsScalarWhereInputObjectSchema),
    z.lazy(() => MedicationsScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

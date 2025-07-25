/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesCreateWithoutOrganizationInputObjectSchema } from './ComorbiditiesCreateWithoutOrganizationInput.schema';
import { ComorbiditiesUncheckedCreateWithoutOrganizationInputObjectSchema } from './ComorbiditiesUncheckedCreateWithoutOrganizationInput.schema';
import { ComorbiditiesCreateOrConnectWithoutOrganizationInputObjectSchema } from './ComorbiditiesCreateOrConnectWithoutOrganizationInput.schema';
import { ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { ComorbiditiesCreateManyOrganizationInputEnvelopeObjectSchema } from './ComorbiditiesCreateManyOrganizationInputEnvelope.schema';
import { ComorbiditiesWhereUniqueInputObjectSchema } from './ComorbiditiesWhereUniqueInput.schema';
import { ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { ComorbiditiesUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './ComorbiditiesUpdateManyWithWhereWithoutOrganizationInput.schema';
import { ComorbiditiesScalarWhereInputObjectSchema } from './ComorbiditiesScalarWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpdateManyWithoutOrganizationNestedInput>;
export const ComorbiditiesUpdateManyWithoutOrganizationNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ComorbiditiesCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ComorbiditiesCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ComorbiditiesUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => ComorbiditiesCreateOrConnectWithoutOrganizationInputObjectSchema),
    z.lazy(() => ComorbiditiesCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => ComorbiditiesUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), createMany: z.lazy(() => ComorbiditiesCreateManyOrganizationInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema),
    z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema),
    z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema),
    z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema),
    z.lazy(() => ComorbiditiesWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema),
    z.lazy(() => ComorbiditiesUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => ComorbiditiesUpdateManyWithWhereWithoutOrganizationInputObjectSchema),
    z.lazy(() => ComorbiditiesUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => ComorbiditiesScalarWhereInputObjectSchema),
    z.lazy(() => ComorbiditiesScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

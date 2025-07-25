/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationCreateWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationUncheckedCreateWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateOrConnectWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationCreateManyCreatedByUserInputEnvelopeObjectSchema } from './DefaultObjectiveInformationCreateManyCreatedByUserInputEnvelope.schema';
import { DefaultObjectiveInformationWhereUniqueInputObjectSchema } from './DefaultObjectiveInformationWhereUniqueInput.schema';
import { DefaultObjectiveInformationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { DefaultObjectiveInformationScalarWhereInputObjectSchema } from './DefaultObjectiveInformationScalarWhereInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationUncheckedUpdateManyWithoutCreatedByUserNestedInput>;
export const DefaultObjectiveInformationUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => DefaultObjectiveInformationCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutCreatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => DefaultObjectiveInformationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => DefaultObjectiveInformationCreateManyCreatedByUserInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => DefaultObjectiveInformationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => DefaultObjectiveInformationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => DefaultObjectiveInformationScalarWhereInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationCreateWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationUncheckedCreateWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationUncheckedCreateWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationCreateOrConnectWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateOrConnectWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpsertWithWhereUniqueWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationCreateManyUpdatedByUserInputEnvelopeObjectSchema } from './DefaultObjectiveInformationCreateManyUpdatedByUserInputEnvelope.schema';
import { DefaultObjectiveInformationWhereUniqueInputObjectSchema } from './DefaultObjectiveInformationWhereUniqueInput.schema';
import { DefaultObjectiveInformationUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpdateWithWhereUniqueWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema } from './DefaultObjectiveInformationUpdateManyWithWhereWithoutUpdatedByUserInput.schema';
import { DefaultObjectiveInformationScalarWhereInputObjectSchema } from './DefaultObjectiveInformationScalarWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationUpdateManyWithoutUpdatedByUserNestedInput>;
export const DefaultObjectiveInformationUpdateManyWithoutUpdatedByUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => DefaultObjectiveInformationCreateWithoutUpdatedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationCreateWithoutUpdatedByUserInputObjectSchema).array(), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutUpdatedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutUpdatedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationCreateOrConnectWithoutUpdatedByUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => DefaultObjectiveInformationUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => DefaultObjectiveInformationCreateManyUpdatedByUserInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => DefaultObjectiveInformationUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => DefaultObjectiveInformationUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => DefaultObjectiveInformationScalarWhereInputObjectSchema),
    z.lazy(() => DefaultObjectiveInformationScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

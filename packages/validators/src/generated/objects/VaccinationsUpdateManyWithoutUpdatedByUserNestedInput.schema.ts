/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsCreateWithoutUpdatedByUserInputObjectSchema } from './VaccinationsCreateWithoutUpdatedByUserInput.schema';
import { VaccinationsUncheckedCreateWithoutUpdatedByUserInputObjectSchema } from './VaccinationsUncheckedCreateWithoutUpdatedByUserInput.schema';
import { VaccinationsCreateOrConnectWithoutUpdatedByUserInputObjectSchema } from './VaccinationsCreateOrConnectWithoutUpdatedByUserInput.schema';
import { VaccinationsUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema } from './VaccinationsUpsertWithWhereUniqueWithoutUpdatedByUserInput.schema';
import { VaccinationsCreateManyUpdatedByUserInputEnvelopeObjectSchema } from './VaccinationsCreateManyUpdatedByUserInputEnvelope.schema';
import { VaccinationsWhereUniqueInputObjectSchema } from './VaccinationsWhereUniqueInput.schema';
import { VaccinationsUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema } from './VaccinationsUpdateWithWhereUniqueWithoutUpdatedByUserInput.schema';
import { VaccinationsUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema } from './VaccinationsUpdateManyWithWhereWithoutUpdatedByUserInput.schema';
import { VaccinationsScalarWhereInputObjectSchema } from './VaccinationsScalarWhereInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.VaccinationsUpdateManyWithoutUpdatedByUserNestedInput>;
export const VaccinationsUpdateManyWithoutUpdatedByUserNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => VaccinationsCreateWithoutUpdatedByUserInputObjectSchema), z.lazy(() => VaccinationsCreateWithoutUpdatedByUserInputObjectSchema).array(), z.lazy(() => VaccinationsUncheckedCreateWithoutUpdatedByUserInputObjectSchema), z.lazy(() => VaccinationsUncheckedCreateWithoutUpdatedByUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => VaccinationsCreateOrConnectWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => VaccinationsCreateOrConnectWithoutUpdatedByUserInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => VaccinationsUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => VaccinationsUpsertWithWhereUniqueWithoutUpdatedByUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => VaccinationsCreateManyUpdatedByUserInputEnvelopeObjectSchema).optional().optional(), set: z.union([z.lazy(() => VaccinationsWhereUniqueInputObjectSchema),
    z.lazy(() => VaccinationsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => VaccinationsWhereUniqueInputObjectSchema),
    z.lazy(() => VaccinationsWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => VaccinationsWhereUniqueInputObjectSchema),
    z.lazy(() => VaccinationsWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => VaccinationsWhereUniqueInputObjectSchema),
    z.lazy(() => VaccinationsWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => VaccinationsUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => VaccinationsUpdateWithWhereUniqueWithoutUpdatedByUserInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => VaccinationsUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema),
    z.lazy(() => VaccinationsUpdateManyWithWhereWithoutUpdatedByUserInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => VaccinationsScalarWhereInputObjectSchema),
    z.lazy(() => VaccinationsScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

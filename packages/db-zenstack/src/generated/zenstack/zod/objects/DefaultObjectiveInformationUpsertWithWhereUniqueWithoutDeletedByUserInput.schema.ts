/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { DefaultObjectiveInformationWhereUniqueInputObjectSchema } from './DefaultObjectiveInformationWhereUniqueInput.schema';
import { DefaultObjectiveInformationUpdateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationUpdateWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationUncheckedUpdateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationUncheckedUpdateWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationCreateWithoutDeletedByUserInput.schema';
import { DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInputObjectSchema } from './DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationUpsertWithWhereUniqueWithoutDeletedByUserInput>;
export const DefaultObjectiveInformationUpsertWithWhereUniqueWithoutDeletedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => DefaultObjectiveInformationWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => DefaultObjectiveInformationUpdateWithoutDeletedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationUncheckedUpdateWithoutDeletedByUserInputObjectSchema)]), create: z.union([z.lazy(() => DefaultObjectiveInformationCreateWithoutDeletedByUserInputObjectSchema), z.lazy(() => DefaultObjectiveInformationUncheckedCreateWithoutDeletedByUserInputObjectSchema)])
}).strict() as SchemaType;

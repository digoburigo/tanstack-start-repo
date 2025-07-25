/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { AllergiesCreateWithoutAllergiesValuesInputObjectSchema } from './AllergiesCreateWithoutAllergiesValuesInput.schema';
import { AllergiesUncheckedCreateWithoutAllergiesValuesInputObjectSchema } from './AllergiesUncheckedCreateWithoutAllergiesValuesInput.schema';
import { AllergiesCreateOrConnectWithoutAllergiesValuesInputObjectSchema } from './AllergiesCreateOrConnectWithoutAllergiesValuesInput.schema';
import { AllergiesCreateManyAllergiesValuesInputEnvelopeObjectSchema } from './AllergiesCreateManyAllergiesValuesInputEnvelope.schema';
import { AllergiesWhereUniqueInputObjectSchema } from './AllergiesWhereUniqueInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.AllergiesUncheckedCreateNestedManyWithoutAllergiesValuesInput>;
export const AllergiesUncheckedCreateNestedManyWithoutAllergiesValuesInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AllergiesCreateWithoutAllergiesValuesInputObjectSchema), z.lazy(() => AllergiesCreateWithoutAllergiesValuesInputObjectSchema).array(), z.lazy(() => AllergiesUncheckedCreateWithoutAllergiesValuesInputObjectSchema), z.lazy(() => AllergiesUncheckedCreateWithoutAllergiesValuesInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AllergiesCreateOrConnectWithoutAllergiesValuesInputObjectSchema),
    z.lazy(() => AllergiesCreateOrConnectWithoutAllergiesValuesInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AllergiesCreateManyAllergiesValuesInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => AllergiesWhereUniqueInputObjectSchema),
    z.lazy(() => AllergiesWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

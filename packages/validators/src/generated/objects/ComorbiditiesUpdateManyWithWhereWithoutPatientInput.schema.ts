/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesScalarWhereInputObjectSchema } from './ComorbiditiesScalarWhereInput.schema';
import { ComorbiditiesUpdateManyMutationInputObjectSchema } from './ComorbiditiesUpdateManyMutationInput.schema';
import { ComorbiditiesUncheckedUpdateManyWithoutPatientInputObjectSchema } from './ComorbiditiesUncheckedUpdateManyWithoutPatientInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpdateManyWithWhereWithoutPatientInput>;
export const ComorbiditiesUpdateManyWithWhereWithoutPatientInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ComorbiditiesScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ComorbiditiesUpdateManyMutationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict() as SchemaType;

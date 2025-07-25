/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { ComorbiditiesScalarWhereInputObjectSchema } from './ComorbiditiesScalarWhereInput.schema';
import { ComorbiditiesUpdateManyMutationInputObjectSchema } from './ComorbiditiesUpdateManyMutationInput.schema';
import { ComorbiditiesUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './ComorbiditiesUncheckedUpdateManyWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.ComorbiditiesUpdateManyWithWhereWithoutCreatedByUserInput>;
export const ComorbiditiesUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ComorbiditiesScalarWhereInputObjectSchema), data: z.union([z.lazy(() => ComorbiditiesUpdateManyMutationInputObjectSchema), z.lazy(() => ComorbiditiesUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

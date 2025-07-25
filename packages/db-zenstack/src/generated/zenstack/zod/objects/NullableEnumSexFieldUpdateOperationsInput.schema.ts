/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SexSchema } from '../enums/Sex.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.NullableEnumSexFieldUpdateOperationsInput>;
export const NullableEnumSexFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.lazy(() => SexSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;

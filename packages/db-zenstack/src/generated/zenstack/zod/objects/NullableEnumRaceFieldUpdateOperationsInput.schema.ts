/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { RaceSchema } from '../enums/Race.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.NullableEnumRaceFieldUpdateOperationsInput>;
export const NullableEnumRaceFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.lazy(() => RaceSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;

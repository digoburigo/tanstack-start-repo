/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MedicationsValuesCountOutputTypeSelect>;
export const MedicationsValuesCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    medications: z.boolean().optional().optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';


import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.CidCountOutputTypeSelect>;
export const CidCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    appointmentCid: z.boolean().optional().optional()
}).strict() as SchemaType;

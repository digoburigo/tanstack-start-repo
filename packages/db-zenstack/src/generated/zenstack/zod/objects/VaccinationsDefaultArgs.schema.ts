/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { VaccinationsSelectObjectSchema } from './VaccinationsSelect.schema';
import { VaccinationsIncludeObjectSchema } from './VaccinationsInclude.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.VaccinationsDefaultArgs>;
export const VaccinationsDefaultArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => VaccinationsSelectObjectSchema).optional().optional(), include: z.lazy(() => VaccinationsIncludeObjectSchema).optional().optional()
}).strict() as SchemaType;

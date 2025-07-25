/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { MemberSelectObjectSchema } from './MemberSelect.schema';
import { MemberIncludeObjectSchema } from './MemberInclude.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.MemberDefaultArgs>;
export const MemberDefaultArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => MemberSelectObjectSchema).optional().optional(), include: z.lazy(() => MemberIncludeObjectSchema).optional().optional()
}).strict() as SchemaType;

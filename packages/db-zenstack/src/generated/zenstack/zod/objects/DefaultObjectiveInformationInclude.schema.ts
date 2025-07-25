/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { UserDefaultArgsObjectSchema } from './UserDefaultArgs.schema';
import { OrganizationDefaultArgsObjectSchema } from './OrganizationDefaultArgs.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.DefaultObjectiveInformationInclude>;
export const DefaultObjectiveInformationIncludeObjectSchema: SchemaType = z.object({
    createdByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), updatedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), deletedByUser: z.union([z.boolean(),
    z.lazy(() => UserDefaultArgsObjectSchema)]).optional(), organization: z.union([z.boolean(),
    z.lazy(() => OrganizationDefaultArgsObjectSchema)]).optional()
}).strict() as SchemaType;

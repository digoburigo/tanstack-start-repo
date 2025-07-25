/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutMembersInputObjectSchema } from './OrganizationCreateWithoutMembersInput.schema';
import { OrganizationUncheckedCreateWithoutMembersInputObjectSchema } from './OrganizationUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.OrganizationCreateOrConnectWithoutMembersInput>;
export const OrganizationCreateOrConnectWithoutMembersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => OrganizationCreateWithoutMembersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict() as SchemaType;

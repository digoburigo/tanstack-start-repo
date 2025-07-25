/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutInvitationsInputObjectSchema } from './OrganizationUpdateWithoutInvitationsInput.schema';
import { OrganizationUncheckedUpdateWithoutInvitationsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutInvitationsInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutInvitationsInput>;
export const OrganizationUpdateToOneWithWhereWithoutInvitationsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrganizationWhereInputObjectSchema).optional().optional(), data: z.union([z.lazy(() => OrganizationUpdateWithoutInvitationsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutInvitationsInputObjectSchema)])
}).strict() as SchemaType;

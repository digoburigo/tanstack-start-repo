/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutOrganizationInputObjectSchema } from './InvitationCreateWithoutOrganizationInput.schema';
import { InvitationUncheckedCreateWithoutOrganizationInputObjectSchema } from './InvitationUncheckedCreateWithoutOrganizationInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.InvitationCreateOrConnectWithoutOrganizationInput>;
export const InvitationCreateOrConnectWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => InvitationWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => InvitationCreateWithoutOrganizationInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict() as SchemaType;

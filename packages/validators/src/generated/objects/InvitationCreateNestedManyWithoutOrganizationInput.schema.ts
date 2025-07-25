/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { InvitationCreateWithoutOrganizationInputObjectSchema } from './InvitationCreateWithoutOrganizationInput.schema';
import { InvitationUncheckedCreateWithoutOrganizationInputObjectSchema } from './InvitationUncheckedCreateWithoutOrganizationInput.schema';
import { InvitationCreateOrConnectWithoutOrganizationInputObjectSchema } from './InvitationCreateOrConnectWithoutOrganizationInput.schema';
import { InvitationCreateManyOrganizationInputEnvelopeObjectSchema } from './InvitationCreateManyOrganizationInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.InvitationCreateNestedManyWithoutOrganizationInput>;
export const InvitationCreateNestedManyWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => InvitationCreateWithoutOrganizationInputObjectSchema), z.lazy(() => InvitationCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputObjectSchema),
    z.lazy(() => InvitationCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(), createMany: z.lazy(() => InvitationCreateManyOrganizationInputEnvelopeObjectSchema).optional().optional(), connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema),
    z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;

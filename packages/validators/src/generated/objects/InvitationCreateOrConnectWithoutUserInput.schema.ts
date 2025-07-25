/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutUserInputObjectSchema } from './InvitationCreateWithoutUserInput.schema';
import { InvitationUncheckedCreateWithoutUserInputObjectSchema } from './InvitationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.InvitationCreateOrConnectWithoutUserInput>;
export const InvitationCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => InvitationWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => InvitationCreateWithoutUserInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;

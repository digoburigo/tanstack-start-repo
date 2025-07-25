/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { EventCalendarWhereUniqueInputObjectSchema } from './EventCalendarWhereUniqueInput.schema';
import { EventCalendarUpdateWithoutCreatedByUserInputObjectSchema } from './EventCalendarUpdateWithoutCreatedByUserInput.schema';
import { EventCalendarUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './EventCalendarUncheckedUpdateWithoutCreatedByUserInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.EventCalendarUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const EventCalendarUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => EventCalendarWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => EventCalendarUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => EventCalendarUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict() as SchemaType;

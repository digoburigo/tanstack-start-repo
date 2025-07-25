/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { EventCalendarTypeSchema } from '../enums/EventCalendarType.schema';
import { NullableEnumEventCalendarTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumEventCalendarTypeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatedAssetsNestedInputObjectSchema } from './UserUpdateOneWithoutCreatedAssetsNestedInput.schema';
import { UserUpdateOneWithoutUpdatedAssetsNestedInputObjectSchema } from './UserUpdateOneWithoutUpdatedAssetsNestedInput.schema';
import { UserUpdateOneWithoutDeletedAssetsNestedInputObjectSchema } from './UserUpdateOneWithoutDeletedAssetsNestedInput.schema';
import { AppointmentUpdateOneWithoutEventCalendarNestedInputObjectSchema } from './AppointmentUpdateOneWithoutEventCalendarNestedInput.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.EventCalendarUpdateWithoutOrganizationInput>;
export const EventCalendarUpdateWithoutOrganizationInputObjectSchema: SchemaType = z.object({
    id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), createdAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updatedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), deletedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), deleted: z.union([z.boolean(),
    z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(), title: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), description: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), start: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), end: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), allDay: z.union([z.boolean(),
    z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), eventType: z.union([z.lazy(() => EventCalendarTypeSchema),
    z.lazy(() => NullableEnumEventCalendarTypeFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), rrule: z.union([z.string(),
    z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
    z.null()]).optional().nullable(), createdByUser: z.lazy(() => UserUpdateOneWithoutCreatedAssetsNestedInputObjectSchema).optional().optional(), updatedByUser: z.lazy(() => UserUpdateOneWithoutUpdatedAssetsNestedInputObjectSchema).optional().optional(), deletedByUser: z.lazy(() => UserUpdateOneWithoutDeletedAssetsNestedInputObjectSchema).optional().optional(), appointment: z.lazy(() => AppointmentUpdateOneWithoutEventCalendarNestedInputObjectSchema).optional().optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    type: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    deletedAt: z.coerce.date().nullish(),
    deleted: z.boolean().default(false),
}
).strict();
const relationSchema = z.object({
    createdByUser: z.record(z.unknown()).optional(),
    updatedByUser: z.record(z.unknown()).optional(),
    deletedByUser: z.record(z.unknown()).optional(),
    organization: z.record(z.unknown()).optional(),
    patient: z.record(z.unknown()).optional(),
    allergiesValues: z.record(z.unknown()),
    appointment: z.record(z.unknown()).optional(),
}
);
const fkSchema = z.object({
    createdById: z.string().nullish(),
    updatedById: z.string().nullish(),
    deletedById: z.string().nullish(),
    organizationId: z.string().nullish(),
    patientId: z.string().nullish(),
    allergiesValuesId: z.string(),
    appointmentId: z.string().nullish(),
}
);

/**
 * `Allergies` schema excluding foreign keys and relations.
 */
export const AllergiesScalarSchema = baseSchema.omit({
    deleted: true,
});


/**
 * `Allergies` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const AllergiesSchema = AllergiesScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const AllergiesPrismaCreateSchema = baseSchema.omit({ type: true }).partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const AllergiesPrismaUpdateSchema = z.object({
    id: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    deletedAt: z.coerce.date().nullish(),
    deleted: z.boolean().default(false)
}).partial().passthrough();


/**
 * `Allergies` schema for create operations excluding foreign keys and relations.
 */
export const AllergiesCreateScalarSchema = baseSchema.omit({ type: true }).partial({
    id: true, createdAt: true, updatedAt: true, deleted: true
});


/**
 * `Allergies` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const AllergiesCreateSchema = AllergiesCreateScalarSchema.merge(fkSchema);


/**
 * `Allergies` schema for update operations excluding foreign keys and relations.
 */
export const AllergiesUpdateScalarSchema = baseSchema.omit({ type: true }).partial();


/**
 * `Allergies` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const AllergiesUpdateSchema = AllergiesUpdateScalarSchema.merge(fkSchema.partial());


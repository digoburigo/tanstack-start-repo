/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().nullish(),
    userAgent: z.string().nullish(),
    impersonatedBy: z.string().nullish(),
    activeOrganizationId: z.string().nullish(),
}
).strict();
const relationSchema = z.object({
    user: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    userId: z.string(),
}
);

/**
 * `Session` schema excluding foreign keys and relations.
 */
export const SessionScalarSchema = baseSchema;


/**
 * `Session` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const SessionSchema = SessionScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const SessionPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const SessionPrismaUpdateSchema = z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().nullish(),
    userAgent: z.string().nullish(),
    impersonatedBy: z.string().nullish(),
    activeOrganizationId: z.string().nullish()
}).partial().passthrough();


/**
 * `Session` schema for create operations excluding foreign keys and relations.
 */
export const SessionCreateScalarSchema = baseSchema.partial({
    id: true, createdAt: true, updatedAt: true
});


/**
 * `Session` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const SessionCreateSchema = SessionCreateScalarSchema.merge(fkSchema);


/**
 * `Session` schema for update operations excluding foreign keys and relations.
 */
export const SessionUpdateScalarSchema = baseSchema.partial();


/**
 * `Session` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const SessionUpdateSchema = SessionUpdateScalarSchema.merge(fkSchema.partial());


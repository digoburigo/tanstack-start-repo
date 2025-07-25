/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumSexNullableFilterObjectSchema } from './EnumSexNullableFilter.schema';
import { SexSchema } from '../enums/Sex.schema';
import { EnumRaceNullableFilterObjectSchema } from './EnumRaceNullableFilter.schema';
import { RaceSchema } from '../enums/Race.schema';
import { EnumCivilStatusNullableFilterObjectSchema } from './EnumCivilStatusNullableFilter.schema';
import { CivilStatusSchema } from '../enums/CivilStatus.schema';
import { EnumBloodTypeNullableFilterObjectSchema } from './EnumBloodTypeNullableFilter.schema';
import { BloodTypeSchema } from '../enums/BloodType.schema';
import { EnumGenderIdentityNullableFilterObjectSchema } from './EnumGenderIdentityNullableFilter.schema';
import { GenderIdentitySchema } from '../enums/GenderIdentity.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema';
import { VaccinationsListRelationFilterObjectSchema } from './VaccinationsListRelationFilter.schema';
import { AllergiesListRelationFilterObjectSchema } from './AllergiesListRelationFilter.schema';
import { MedicationsListRelationFilterObjectSchema } from './MedicationsListRelationFilter.schema';
import { ExamResultsListRelationFilterObjectSchema } from './ExamResultsListRelationFilter.schema';
import { ComorbiditiesListRelationFilterObjectSchema } from './ComorbiditiesListRelationFilter.schema';
import { SurgeriesListRelationFilterObjectSchema } from './SurgeriesListRelationFilter.schema';
import { HealthPlansListRelationFilterObjectSchema } from './HealthPlansListRelationFilter.schema';

import type { Prisma } from '../../models';

type SchemaType = z.ZodType<Prisma.PatientWhereInput>;
export const PatientWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PatientWhereInputObjectSchema),
    z.lazy(() => PatientWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PatientWhereInputObjectSchema).array().optional().optional(), NOT: z.union([z.lazy(() => PatientWhereInputObjectSchema),
    z.lazy(() => PatientWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), type: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), createdById: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), deletedById: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), deleted: z.union([z.lazy(() => BoolFilterObjectSchema),
    z.boolean()]).optional(), organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), name: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), cpf: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), cellphone: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), email: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), sex: z.union([z.lazy(() => EnumSexNullableFilterObjectSchema),
    z.lazy(() => SexSchema),
    z.null()]).optional().nullable(), responsible: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), nationality: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), race: z.union([z.lazy(() => EnumRaceNullableFilterObjectSchema),
    z.lazy(() => RaceSchema),
    z.null()]).optional().nullable(), state: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), city: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), zipcode: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), neighborhood: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), street: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), number: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), complement: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), occupation: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), sexualOrientation: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), civilStatus: z.union([z.lazy(() => EnumCivilStatusNullableFilterObjectSchema),
    z.lazy(() => CivilStatusSchema),
    z.null()]).optional().nullable(), bloodType: z.union([z.lazy(() => EnumBloodTypeNullableFilterObjectSchema),
    z.lazy(() => BloodTypeSchema),
    z.null()]).optional().nullable(), genderIdentity: z.union([z.lazy(() => EnumGenderIdentityNullableFilterObjectSchema),
    z.lazy(() => GenderIdentitySchema),
    z.null()]).optional().nullable(), password: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), userId: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), createdByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), updatedByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), deletedByUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), organization: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema),
    z.lazy(() => OrganizationWhereInputObjectSchema),
    z.null()]).optional().nullable(), user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema),
    z.null()]).optional().nullable(), appointments: z.lazy(() => AppointmentListRelationFilterObjectSchema).optional().optional(), vaccinations: z.lazy(() => VaccinationsListRelationFilterObjectSchema).optional().optional(), allergies: z.lazy(() => AllergiesListRelationFilterObjectSchema).optional().optional(), medications: z.lazy(() => MedicationsListRelationFilterObjectSchema).optional().optional(), examResults: z.lazy(() => ExamResultsListRelationFilterObjectSchema).optional().optional(), comorbidities: z.lazy(() => ComorbiditiesListRelationFilterObjectSchema).optional().optional(), surgeries: z.lazy(() => SurgeriesListRelationFilterObjectSchema).optional().optional(), healthPlans: z.lazy(() => HealthPlansListRelationFilterObjectSchema).optional().optional()
}).strict() as SchemaType;

/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { z } from 'zod';
import { SexSchema } from '../enums/Sex.schema';
import { RaceSchema } from '../enums/Race.schema';
import { CivilStatusSchema } from '../enums/CivilStatus.schema';
import { BloodTypeSchema } from '../enums/BloodType.schema';
import { GenderIdentitySchema } from '../enums/GenderIdentity.schema';
import { UserCreateWithoutCreatedAssetsInputObjectSchema } from './UserCreateWithoutCreatedAssetsInput.schema';
import { UserCreateWithoutUpdatedAssetsInputObjectSchema } from './UserCreateWithoutUpdatedAssetsInput.schema';
import { UserCreateWithoutDeletedAssetsInputObjectSchema } from './UserCreateWithoutDeletedAssetsInput.schema';
import { OrganizationCreateWithoutAssetsInputObjectSchema } from './OrganizationCreateWithoutAssetsInput.schema';
import { UserCreateNestedOneWithoutPatientUserInputObjectSchema } from './UserCreateNestedOneWithoutPatientUserInput.schema';
import { AppointmentCreateNestedManyWithoutPatientInputObjectSchema } from './AppointmentCreateNestedManyWithoutPatientInput.schema';
import { VaccinationsCreateNestedManyWithoutPatientInputObjectSchema } from './VaccinationsCreateNestedManyWithoutPatientInput.schema';
import { AllergiesCreateNestedManyWithoutPatientInputObjectSchema } from './AllergiesCreateNestedManyWithoutPatientInput.schema';
import { ExamResultsCreateNestedManyWithoutPatientInputObjectSchema } from './ExamResultsCreateNestedManyWithoutPatientInput.schema';
import { ComorbiditiesCreateNestedManyWithoutPatientInputObjectSchema } from './ComorbiditiesCreateNestedManyWithoutPatientInput.schema';
import { SurgeriesCreateNestedManyWithoutPatientInputObjectSchema } from './SurgeriesCreateNestedManyWithoutPatientInput.schema';
import { HealthPlansCreateNestedManyWithoutPatientInputObjectSchema } from './HealthPlansCreateNestedManyWithoutPatientInput.schema';

import type { Prisma } from '../../../../db-zenstack/src/generated/zenstack/models';

type SchemaType = z.ZodType<Prisma.PatientCreateWithoutMedicationsInput>;
export const PatientCreateWithoutMedicationsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]).optional(), deletedAt: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), deleted: z.boolean().optional().optional(), name: z.string(), cpf: z.string(), cellphone: z.string(), email: z.string(), sex: z.union([z.lazy(() => SexSchema),
    z.null()]).optional().nullable(), responsible: z.union([z.string(),
    z.null()]).optional().nullable(), nationality: z.string(), race: z.union([z.lazy(() => RaceSchema),
    z.null()]).optional().nullable(), state: z.string(), city: z.string(), zipcode: z.string(), neighborhood: z.string(), street: z.string(), number: z.string(), complement: z.union([z.string(),
    z.null()]).optional().nullable(), occupation: z.string(), sexualOrientation: z.union([z.string(),
    z.null()]).optional().nullable(), civilStatus: z.union([z.lazy(() => CivilStatusSchema),
    z.null()]).optional().nullable(), bloodType: z.union([z.lazy(() => BloodTypeSchema),
    z.null()]).optional().nullable(), genderIdentity: z.union([z.lazy(() => GenderIdentitySchema),
    z.null()]).optional().nullable(), password: z.union([z.string(),
    z.null()]).optional().nullable(), createdByUser: z.lazy(() => UserCreateWithoutCreatedAssetsInputObjectSchema).optional().optional(), updatedByUser: z.lazy(() => UserCreateWithoutUpdatedAssetsInputObjectSchema).optional().optional(), deletedByUser: z.lazy(() => UserCreateWithoutDeletedAssetsInputObjectSchema).optional().optional(), organization: z.lazy(() => OrganizationCreateWithoutAssetsInputObjectSchema).optional().optional(), user: z.lazy(() => UserCreateNestedOneWithoutPatientUserInputObjectSchema).optional().optional(), appointments: z.lazy(() => AppointmentCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), vaccinations: z.lazy(() => VaccinationsCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), allergies: z.lazy(() => AllergiesCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), examResults: z.lazy(() => ExamResultsCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), comorbidities: z.lazy(() => ComorbiditiesCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), surgeries: z.lazy(() => SurgeriesCreateNestedManyWithoutPatientInputObjectSchema).optional().optional(), healthPlans: z.lazy(() => HealthPlansCreateNestedManyWithoutPatientInputObjectSchema).optional().optional()
}).strict() as SchemaType;

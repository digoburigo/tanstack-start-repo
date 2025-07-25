/******************************************************************************
 * This file was generated by ZenStack CLI.
 ******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type { PrismaClient } from "../../../../db-zenstack/src/generated/zenstack/models";
import { createTRPCRouter } from "../../trpc";
import createUserRouter from "./User.router";
import createAssetRouter from "./Asset.router";
import createSessionRouter from "./Session.router";
import createAccountRouter from "./Account.router";
import createVerificationRouter from "./Verification.router";
import createOrganizationRouter from "./Organization.router";
import createMemberRouter from "./Member.router";
import createInvitationRouter from "./Invitation.router";
import createCidRouter from "./Cid.router";
import createAppointmentCidRouter from "./AppointmentCid.router";
import createAppointmentRouter from "./Appointment.router";
import createPatientRouter from "./Patient.router";
import createVaccinationsRouter from "./Vaccinations.router";
import createVaccinationsValuesRouter from "./VaccinationsValues.router";
import createAllergiesRouter from "./Allergies.router";
import createAllergiesValuesRouter from "./AllergiesValues.router";
import createMedicationsRouter from "./Medications.router";
import createMedicationsValuesRouter from "./MedicationsValues.router";
import createExamResultsRouter from "./ExamResults.router";
import createExamResultsValuesRouter from "./ExamResultsValues.router";
import createComorbiditiesRouter from "./Comorbidities.router";
import createComorbiditiesValuesRouter from "./ComorbiditiesValues.router";
import createSurgeriesRouter from "./Surgeries.router";
import createSurgeriesValuesRouter from "./SurgeriesValues.router";
import createHealthPlansRouter from "./HealthPlans.router";
import createHealthPlansValuesRouter from "./HealthPlansValues.router";
import createDefaultObjectiveInformationRouter from "./DefaultObjectiveInformation.router";
import createEventCalendarRouter from "./EventCalendar.router";

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter() {
    return createTRPCRouter({
        user: createUserRouter(),
        asset: createAssetRouter(),
        session: createSessionRouter(),
        account: createAccountRouter(),
        verification: createVerificationRouter(),
        organization: createOrganizationRouter(),
        member: createMemberRouter(),
        invitation: createInvitationRouter(),
        cid: createCidRouter(),
        appointmentCid: createAppointmentCidRouter(),
        appointment: createAppointmentRouter(),
        patient: createPatientRouter(),
        vaccinations: createVaccinationsRouter(),
        vaccinationsValues: createVaccinationsValuesRouter(),
        allergies: createAllergiesRouter(),
        allergiesValues: createAllergiesValuesRouter(),
        medications: createMedicationsRouter(),
        medicationsValues: createMedicationsValuesRouter(),
        examResults: createExamResultsRouter(),
        examResultsValues: createExamResultsValuesRouter(),
        comorbidities: createComorbiditiesRouter(),
        comorbiditiesValues: createComorbiditiesValuesRouter(),
        surgeries: createSurgeriesRouter(),
        surgeriesValues: createSurgeriesValuesRouter(),
        healthPlans: createHealthPlansRouter(),
        healthPlansValues: createHealthPlansValuesRouter(),
        defaultObjectiveInformation: createDefaultObjectiveInformationRouter(),
        eventCalendar: createEventCalendarRouter(),
    }
    );
}

/*
  Warnings:

  - You are about to drop the column `createdAt` on the `allergies` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `allergies` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `appointment_cid` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `comorbidities` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `comorbidities` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `default_objective_information` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `event_calendar` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `event_calendar` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `event_calendar` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `event_calendar` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `exam_results` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `exam_results` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `health_plans` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `health_plans` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `surgeries` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `surgeries` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `vaccinations` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `vaccinations` table. All the data in the column will be lost.
  - Made the column `end` on table `event_calendar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start` on table `event_calendar` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "invitation" ADD COLUMN "updatedAt" DATETIME;

-- CreateTable
CREATE TABLE "asset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "updatedById" TEXT,
    "deletedAt" DATETIME,
    "deletedById" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" TEXT,
    CONSTRAINT "asset_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "asset_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "asset_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "asset_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_allergies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT,
    "allergiesValuesId" TEXT NOT NULL,
    "appointmentId" TEXT,
    CONSTRAINT "allergies_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "allergies_allergiesValuesId_fkey" FOREIGN KEY ("allergiesValuesId") REFERENCES "allergies_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "allergies_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "allergies_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_allergies" ("allergiesValuesId", "appointmentId", "id", "patientId") SELECT "allergiesValuesId", "appointmentId", "id", "patientId" FROM "allergies";
DROP TABLE "allergies";
ALTER TABLE "new_allergies" RENAME TO "allergies";
CREATE TABLE "new_appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "motive" TEXT NOT NULL,
    "subjective" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "evaluation" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "sickNoteDays" INTEGER,
    "category" TEXT,
    "status" TEXT,
    "followUpId" TEXT,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "appointment_followUpId_fkey" FOREIGN KEY ("followUpId") REFERENCES "appointment" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "appointment_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_appointment" ("category", "endDate", "evaluation", "followUpId", "id", "motive", "objective", "patientId", "plan", "sickNoteDays", "startDate", "status", "subjective") SELECT "category", "endDate", "evaluation", "followUpId", "id", "motive", "objective", "patientId", "plan", "sickNoteDays", "startDate", "status", "subjective" FROM "appointment";
DROP TABLE "appointment";
ALTER TABLE "new_appointment" RENAME TO "appointment";
CREATE UNIQUE INDEX "appointment_followUpId_key" ON "appointment"("followUpId");
CREATE TABLE "new_appointment_cid" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "appointmentId" TEXT NOT NULL,
    "cidId" TEXT NOT NULL,
    CONSTRAINT "appointment_cid_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "appointment_cid_cidId_fkey" FOREIGN KEY ("cidId") REFERENCES "cid" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "appointment_cid_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_appointment_cid" ("appointmentId", "cidId", "id") SELECT "appointmentId", "cidId", "id" FROM "appointment_cid";
DROP TABLE "appointment_cid";
ALTER TABLE "new_appointment_cid" RENAME TO "appointment_cid";
CREATE UNIQUE INDEX "appointment_cid_appointmentId_cidId_key" ON "appointment_cid"("appointmentId", "cidId");
CREATE TABLE "new_cid" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_cid" ("code", "description", "id") SELECT "code", "description", "id" FROM "cid";
DROP TABLE "cid";
ALTER TABLE "new_cid" RENAME TO "cid";
CREATE INDEX "cid_code_idx" ON "cid"("code");
CREATE UNIQUE INDEX "cid_code_key" ON "cid"("code");
CREATE TABLE "new_comorbidities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT,
    "comorbiditiesValuesId" TEXT NOT NULL,
    "appointmentId" TEXT,
    CONSTRAINT "comorbidities_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comorbidities_comorbiditiesValuesId_fkey" FOREIGN KEY ("comorbiditiesValuesId") REFERENCES "comorbidities_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comorbidities_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "comorbidities_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_comorbidities" ("appointmentId", "comorbiditiesValuesId", "id", "patientId") SELECT "appointmentId", "comorbiditiesValuesId", "id", "patientId" FROM "comorbidities";
DROP TABLE "comorbidities";
ALTER TABLE "new_comorbidities" RENAME TO "comorbidities";
CREATE TABLE "new_default_objective_information" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT,
    CONSTRAINT "default_objective_information_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_default_objective_information" ("id", "text") SELECT "id", "text" FROM "default_objective_information";
DROP TABLE "default_objective_information";
ALTER TABLE "new_default_objective_information" RENAME TO "default_objective_information";
CREATE TABLE "new_event_calendar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "allDay" BOOLEAN DEFAULT false,
    "eventType" TEXT,
    "rrule" TEXT,
    "appointmentId" TEXT,
    CONSTRAINT "event_calendar_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_calendar_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_event_calendar" ("allDay", "appointmentId", "description", "end", "eventType", "id", "rrule", "start", "title") SELECT "allDay", "appointmentId", "description", "end", "eventType", "id", "rrule", "start", "title" FROM "event_calendar";
DROP TABLE "event_calendar";
ALTER TABLE "new_event_calendar" RENAME TO "event_calendar";
CREATE UNIQUE INDEX "event_calendar_appointmentId_key" ON "event_calendar"("appointmentId");
CREATE TABLE "new_exam_results" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "examResultsValuesId" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "exam_results_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "exam_results_examResultsValuesId_fkey" FOREIGN KEY ("examResultsValuesId") REFERENCES "exam_results_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "exam_results_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_exam_results" ("date", "examResultsValuesId", "id", "patientId", "result") SELECT "date", "examResultsValuesId", "id", "patientId", "result" FROM "exam_results";
DROP TABLE "exam_results";
ALTER TABLE "new_exam_results" RENAME TO "exam_results";
CREATE TABLE "new_health_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "healthPlansValuesId" TEXT NOT NULL,
    CONSTRAINT "health_plans_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "health_plans_healthPlansValuesId_fkey" FOREIGN KEY ("healthPlansValuesId") REFERENCES "health_plans_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "health_plans_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_health_plans" ("healthPlansValuesId", "id", "patientId") SELECT "healthPlansValuesId", "id", "patientId" FROM "health_plans";
DROP TABLE "health_plans";
ALTER TABLE "new_health_plans" RENAME TO "health_plans";
CREATE TABLE "new_medications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT,
    "medicationsValuesId" TEXT NOT NULL,
    "appointmentId" TEXT,
    CONSTRAINT "medications_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "medications_medicationsValuesId_fkey" FOREIGN KEY ("medicationsValuesId") REFERENCES "medications_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "medications_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "medications_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_medications" ("appointmentId", "id", "medicationsValuesId", "patientId") SELECT "appointmentId", "id", "medicationsValuesId", "patientId" FROM "medications";
DROP TABLE "medications";
ALTER TABLE "new_medications" RENAME TO "medications";
CREATE TABLE "new_patient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sex" TEXT,
    "responsible" TEXT,
    "nationality" TEXT NOT NULL,
    "race" TEXT,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "occupation" TEXT NOT NULL,
    "sexualOrientation" TEXT,
    "civilStatus" TEXT,
    "bloodType" TEXT,
    "genderIdentity" TEXT,
    "password" TEXT,
    "userId" TEXT,
    CONSTRAINT "patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "patient_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_patient" ("bloodType", "cellphone", "city", "civilStatus", "complement", "cpf", "email", "genderIdentity", "id", "name", "nationality", "neighborhood", "number", "occupation", "password", "race", "responsible", "sex", "sexualOrientation", "state", "street", "userId", "zipcode") SELECT "bloodType", "cellphone", "city", "civilStatus", "complement", "cpf", "email", "genderIdentity", "id", "name", "nationality", "neighborhood", "number", "occupation", "password", "race", "responsible", "sex", "sexualOrientation", "state", "street", "userId", "zipcode" FROM "patient";
DROP TABLE "patient";
ALTER TABLE "new_patient" RENAME TO "patient";
CREATE TABLE "new_surgeries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "surgeriesValuesId" TEXT NOT NULL,
    CONSTRAINT "surgeries_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "surgeries_surgeriesValuesId_fkey" FOREIGN KEY ("surgeriesValuesId") REFERENCES "surgeries_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "surgeries_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_surgeries" ("id", "patientId", "surgeriesValuesId") SELECT "id", "patientId", "surgeriesValuesId" FROM "surgeries";
DROP TABLE "surgeries";
ALTER TABLE "new_surgeries" RENAME TO "surgeries";
CREATE TABLE "new_vaccinations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "vaccinationsValuesId" TEXT NOT NULL,
    CONSTRAINT "vaccinations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "vaccinations_vaccinationsValuesId_fkey" FOREIGN KEY ("vaccinationsValuesId") REFERENCES "vaccinations_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "vaccinations_id_fkey" FOREIGN KEY ("id") REFERENCES "asset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_vaccinations" ("id", "patientId", "vaccinationsValuesId") SELECT "id", "patientId", "vaccinationsValuesId" FROM "vaccinations";
DROP TABLE "vaccinations";
ALTER TABLE "new_vaccinations" RENAME TO "vaccinations";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

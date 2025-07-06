/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `date` on table `exam_results` required. This step will fail if there are existing NULL values in that column.
  - Made the column `result` on table `exam_results` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "post_slug_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "event_calendar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "start" DATETIME,
    "end" DATETIME,
    "allDay" BOOLEAN DEFAULT false,
    "eventType" TEXT,
    "rrule" TEXT,
    "appointmentId" TEXT,
    "ownerId" TEXT NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "event_calendar_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_calendar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_calendar_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
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
    "ownerId" TEXT NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "appointment_followUpId_fkey" FOREIGN KEY ("followUpId") REFERENCES "appointment" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "appointment_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "appointment_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_appointment" ("createdAt", "evaluation", "id", "motive", "objective", "organizationId", "ownerId", "patientId", "plan", "sickNoteDays", "subjective", "updatedAt") SELECT "createdAt", "evaluation", "id", "motive", "objective", "organizationId", "ownerId", "patientId", "plan", "sickNoteDays", "subjective", "updatedAt" FROM "appointment";
DROP TABLE "appointment";
ALTER TABLE "new_appointment" RENAME TO "appointment";
CREATE UNIQUE INDEX "appointment_followUpId_key" ON "appointment"("followUpId");
CREATE TABLE "new_exam_results" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" TEXT NOT NULL,
    "examResultsValuesId" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "exam_results_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "exam_results_examResultsValuesId_fkey" FOREIGN KEY ("examResultsValuesId") REFERENCES "exam_results_values" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "exam_results_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_exam_results" ("createdAt", "date", "examResultsValuesId", "id", "organizationId", "patientId", "result") SELECT "createdAt", "date", "examResultsValuesId", "id", "organizationId", "patientId", "result" FROM "exam_results";
DROP TABLE "exam_results";
ALTER TABLE "new_exam_results" RENAME TO "exam_results";
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    "organizationId" TEXT,
    "userId" TEXT,
    CONSTRAINT "patient_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "patient_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_patient" ("bloodType", "cellphone", "city", "civilStatus", "complement", "cpf", "createdAt", "email", "genderIdentity", "id", "name", "nationality", "neighborhood", "number", "occupation", "organizationId", "ownerId", "password", "race", "responsible", "sex", "sexualOrientation", "state", "street", "updatedAt", "userId", "zipcode") SELECT "bloodType", "cellphone", "city", "civilStatus", "complement", "cpf", "createdAt", "email", "genderIdentity", "id", "name", "nationality", "neighborhood", "number", "occupation", "organizationId", "ownerId", "password", "race", "responsible", "sex", "sexualOrientation", "state", "street", "updatedAt", "userId", "zipcode" FROM "patient";
DROP TABLE "patient";
ALTER TABLE "new_patient" RENAME TO "patient";
CREATE UNIQUE INDEX "patient_userId_organizationId_key" ON "patient"("userId", "organizationId");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "username" TEXT,
    "displayUsername" TEXT,
    "role" TEXT DEFAULT 'user',
    "banned" BOOLEAN,
    "banReason" TEXT,
    "banExpires" DATETIME,
    "changePassword" BOOLEAN DEFAULT false
);
INSERT INTO "new_user" ("banExpires", "banReason", "banned", "createdAt", "email", "emailVerified", "id", "image", "name", "role", "updatedAt") SELECT "banExpires", "banReason", "banned", "createdAt", "email", "emailVerified", "id", "image", "name", "role", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "event_calendar_appointmentId_key" ON "event_calendar"("appointmentId");

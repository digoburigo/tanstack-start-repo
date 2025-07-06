import type { Prisma } from "zenstack-app/models";

// -- INIT: PATIENT ENTITY
const patientEntityInclude = {
  include: {
    vaccinations: {
      include: {
        vaccinationsValues: true,
      },
    },
    allergies: {
      include: {
        allergiesValues: true,
      },
    },
    medications: {
      include: {
        medicationsValues: true,
      },
    },
    comorbidities: {
      include: {
        comorbiditiesValues: true,
      },
    },
    surgeries: {
      include: {
        surgeriesValues: true,
      },
    },
    healthPlans: {
      include: {
        healthPlansValues: true,
      },
    },
    examResults: {
      include: {
        examResultsValues: true,
      },
    },
  },
} satisfies Prisma.PatientDefaultArgs;

export type PatientEntity = Prisma.PatientGetPayload<
  typeof patientEntityInclude
>;
// -- END: PATIENT ENTITY

// -- INIT NEW PATIENT APPOINTMENT ENTITY
const patientEntityNewAppointmentInclude = {
  include: {
    allergies: {
      include: {
        allergiesValues: true,
      },
    },
    medications: {
      include: {
        medicationsValues: true,
      },
    },
    comorbidities: {
      include: {
        comorbiditiesValues: true,
      },
    },
  },
} satisfies Prisma.PatientDefaultArgs;

export type PatientEntityNewAppointment = Prisma.PatientGetPayload<
  typeof patientEntityNewAppointmentInclude
>;
// -- END: NEW PATIENT APPOINTMENT ENTITY

// -- INIT: PATIENT WITH APPOINTMENTS ENTITY
const patientWithAppointmentsEntityInclude = {
  include: {
    appointments: true,
  },
} satisfies Prisma.PatientDefaultArgs;

export type PatientWithAppointments = Prisma.PatientGetPayload<
  typeof patientWithAppointmentsEntityInclude
>;
// -- END: PATIENT WITH APPOINTMENTS ENTITY

// -- INIT: APPOINTMENT ENTITY
const appointmentWithPatientName = {
  include: {
    patient: {
      select: {
        name: true,
      },
    },
  },
} satisfies Prisma.AppointmentDefaultArgs;

export type AppointmentWithPatientName = Prisma.AppointmentGetPayload<
  typeof appointmentWithPatientName
>;
// -- END: APPOINTMENT ENTITY

// -- INIT: PATIENT WITH APPOINTMENTS AND VALUES ENTITY
const patientWithAppointmentsAndValuesEntityInclude = {
  include: {
    appointments: true,
    vaccinations: {
      include: {
        vaccinationsValues: true,
      },
    },
    allergies: {
      include: {
        allergiesValues: true,
      },
    },
    medications: {
      include: {
        medicationsValues: true,
      },
    },
    comorbidities: {
      include: {
        comorbiditiesValues: true,
      },
    },
    surgeries: {
      include: {
        surgeriesValues: true,
      },
    },
    healthPlans: {
      include: {
        healthPlansValues: true,
      },
    },
    examResults: {
      include: {
        examResultsValues: true,
      },
    },
  },
} satisfies Prisma.PatientDefaultArgs;

export type PatientWithAppointmentsAndValues = Prisma.PatientGetPayload<
  typeof patientWithAppointmentsAndValuesEntityInclude
>;
// -- END: PATIENT WITH APPOINTMENTS AND VALUES ENTITY

// -- INIT: APPOINTMENT ENTITY
const appointmentWithMedicalInfo = {
  include: {
    cids: {
      include: {
        cid: true,
      },
    },
    allergies: {
      include: {
        allergiesValues: true,
      },
    },
    medications: {
      include: {
        medicationsValues: true,
      },
    },
    comorbidities: {
      include: {
        comorbiditiesValues: true,
      },
    },
  },
} satisfies Prisma.AppointmentDefaultArgs;

export type AppointmentWithMedicalInfo = Prisma.AppointmentGetPayload<
  typeof appointmentWithMedicalInfo
>;
// -- END: APPOINTMENT ENTITY

// -- INIT: MEMBER ENTITY
const memberWithUserEntityInclude = {
  include: {
    user: true,
  },
} satisfies Prisma.MemberDefaultArgs;

export type MemberWithUser = Prisma.MemberGetPayload<
  typeof memberWithUserEntityInclude
>;
// -- END: MEMBER ENTITY

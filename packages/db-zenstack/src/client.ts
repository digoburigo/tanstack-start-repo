// import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

import { PrismaClient } from "./prisma/generated/prisma/client";

// const libsql = createClient({
//   url:
//     process.env.NODE_ENV === "production"
//       ? `${process.env.TURSO_DATABASE_URL}`
//       : "file:./prisma/dev.db",
//   authToken:
//     process.env.NODE_ENV === "production"
//       ? `${process.env.TURSO_DATABASE_AUTH_TOKEN}`
//       : undefined,
// });

const adapter = new PrismaLibSQL({
  // url: `${process.env.TURSO_DATABASE_URL}`,
  // authToken: `${process.env.TURSO_DATABASE_AUTH_TOKEN}`,
  url:
    process.env.NODE_ENV === "production"
      ? `${process.env.TURSO_DATABASE_URL}`
      : "file:./db.sqlite",
  authToken:
    process.env.NODE_ENV === "production"
      ? `${process.env.TURSO_DATABASE_AUTH_TOKEN}`
      : undefined,
});

const createPrismaClient = () =>
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

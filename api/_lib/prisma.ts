import pkg from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
const { PrismaClient } = pkg;

// Reuse a single PrismaClient across warm serverless invocations instead of
// opening a new connection per request.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClientType };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

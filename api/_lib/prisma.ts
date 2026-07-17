import { createRequire } from "node:module";

// Loaded via real CommonJS require() rather than a static ESM import.
// @prisma/client's package "exports" map has proven inconsistent to
// resolve as a named ESM import across environments (worked locally,
// failed on Vercel's build in two different ways) — require() sidesteps
// that resolution path entirely, since it isn't a bundler/type-only
// concern, it's how the generated client actually expects to be loaded.
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");

// Reuse a single PrismaClient across warm serverless invocations instead of
// opening a new connection per request.
const globalForPrisma = globalThis as unknown as { prisma?: InstanceType<typeof PrismaClient> };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

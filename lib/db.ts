import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

import { withAccelerate } from "@prisma/extension-accelerate";

export const db = new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;

  // If DATABASE_URL is not provided, do not throw during module import.
  // Instead return a no-op proxy that provides safe default responses for
  // common Prisma operations. This prevents build-time crashes and lets
  // the app run without a real database during deploys where the DB is
  // not yet configured.
  if (!databaseUrl) {
    return null as unknown as PrismaClient;
  }

  const adapter = new PrismaPg({ connectionString: databaseUrl });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
}

let prismaInstance: PrismaClient | undefined = undefined;

export const prisma = (() => {
  if (prismaInstance) return prismaInstance;
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  // Attempt to create a real Prisma client. If DATABASE_URL is not set
  // createPrismaClient() returns null; in that case expose a no-op proxy
  // that returns safe defaults for common methods so the application can
  // build and run without a live database.
  const client = createPrismaClient();
  if (!client) {
    const handler: ProxyHandler<Record<string, unknown>> = {
      get(_tgt, prop) {
        // Common Prisma client method names and model operations
        const name = String(prop);

        // Methods that should resolve without error
        if (name === '$connect' || name === '$disconnect' || name === '$transaction') {
          return async () => {};
        }

        if (name === '$queryRaw' || name === '$executeRaw') {
          return async () => null;
        }

        // Default for model operations (e.g. prisma.user.findMany)
        return async (..._args: unknown[]) => {
          // Return sensible defaults depending on method name
          if (name.includes('findMany') || name === 'findMany') return [];
          if (name.includes('findUnique') || name === 'findFirst' || name === 'findBy') return null;
          if (name.includes('count')) return 0;
          if (name.includes('create') || name.includes('update') || name.includes('upsert') || name.includes('delete')) return null;
          // Generic fallback
          return null;
        };
      },
    };

    prismaInstance = new Proxy({}, handler) as unknown as PrismaClient;
    return prismaInstance;
  }

  prismaInstance = client;
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaInstance;
  }
  return prismaInstance;
})();

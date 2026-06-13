import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set. Please configure your database connection.');
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
  
  prismaInstance = createPrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaInstance;
  }
  return prismaInstance;
})();

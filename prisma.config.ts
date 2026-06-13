import { defineConfig } from 'prisma/config';
import { PrismaPg } from '@prisma/adapter-pg';

export default defineConfig({
  earlyAccess: true,
  datasources: {
    db: {
      adapter: () => {
        const databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl) {
          throw new Error('DATABASE_URL environment variable is not set');
        }
        return new PrismaPg({ connectionString: databaseUrl });
      },
    },
  },
});

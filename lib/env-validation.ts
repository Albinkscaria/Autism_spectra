import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Database
  DATABASE_URL: z.string().url('Invalid DATABASE_URL'),
  
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid SUPABASE_URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'SUPABASE_ANON_KEY is required'),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, 'SUPABASE_SERVICE_ROLE_KEY is required'),
  
  // Stripe
  STRIPE_SECRET_KEY: z.string().min(1, 'STRIPE_SECRET_KEY is required'),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1, 'STRIPE_PUBLISHABLE_KEY is required'),
  STRIPE_WEBHOOK_SECRET: z.string().min(1, 'STRIPE_WEBHOOK_SECRET is required'),
  
  // Daily.co
  DAILY_API_KEY: z.string().min(1, 'DAILY_API_KEY is required'),
  
  // Resend
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  
  // Admin
  ADMIN_PASSPHRASE: z.string().min(8, 'ADMIN_PASSPHRASE must be at least 8 characters'),
  
  // App
  NEXT_PUBLIC_APP_URL: z.string().url('Invalid APP_URL'),
});

// Validate environment variables
function validateEnv() {
  try {
    const env = envSchema.parse(process.env);
    return env;
  } catch (error) {
    console.error('❌ Environment validation failed:');
    if (error instanceof z.ZodError) {
      error.issues.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
    }
    throw new Error('Invalid environment configuration');
  }
}

// Export validated environment
export const env = validateEnv();

// Type for environment variables
export type Env = z.infer<typeof envSchema>;
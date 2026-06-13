import { z } from "zod";

const envSchema = z.object({
  // Supabase
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  
  // Stripe
  STRIPE_SECRET_KEY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
  
  // Daily.co
  DAILY_API_KEY: z.string().min(1),
  
  // Resend
  RESEND_API_KEY: z.string().min(1),
  
  // Anthropic
  ANTHROPIC_API_KEY: z.string().min(1),
  
  // Admin
  ADMIN_PASSPHRASE: z.string().min(8),
  
  // App
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | undefined = undefined;

function validateEnv(): Env {
  if (cachedEnv) return cachedEnv;
  
  const parsed = envSchema.safeParse(process.env);
  
  if (!parsed.success) {
    console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
  }
  
  cachedEnv = parsed.data;
  return cachedEnv;
}

// Lazy load: only validate when accessed
Object.defineProperty(exports, 'env', {
  get: () => validateEnv(),
});

export { validateEnv };

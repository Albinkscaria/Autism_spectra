import { z } from "zod";

const envSchema = z.object({
  // Required
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional().default("http://localhost:3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  
  // Supabase (optional for now)
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  
  // Stripe (optional for now)
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  
  // Daily.co (optional for now)
  DAILY_API_KEY: z.string().min(1).optional(),
  
  // Resend (optional for now)
  RESEND_API_KEY: z.string().min(1).optional(),
  
  // Anthropic (optional for now)
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  
  // Admin (optional for now)
  ADMIN_PASSPHRASE: z.string().min(1).optional(),
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

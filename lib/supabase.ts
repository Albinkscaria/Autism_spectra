import { createBrowserClient } from '@supabase/ssr';

function hasSupabaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

function createNoopClient() {
  const noopResponse = async () => ({ data: null, error: null });
  const noopQuery = new Proxy({}, {
    get: () => noopResponse,
  });
  const noopAuth = {
    getUser: noopResponse,
    getSession: noopResponse,
    signUp: noopResponse,
    signInWithPassword: noopResponse,
    signInWithOAuth: noopResponse,
    signOut: noopResponse,
    updateUser: noopResponse,
    onAuthStateChange: () => ({ data: null, error: null, subscription: { unsubscribe: () => {} } }),
  };

  return new Proxy({}, {
    get(_, prop) {
      if (prop === 'auth') return noopAuth;
      if (prop === 'from') return () => noopQuery;
      return noopResponse;
    },
  }) as any;
}

export function createClient() {
  if (!hasSupabaseConfig()) {
    return createNoopClient();
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// For server actions and API routes
export const supabase = createClient();

// Server-side client with service role key
export const supabaseAdmin = hasSupabaseConfig() && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  : createNoopClient();

/**
 * Environment-variable validation.
 * Throws at build/start time if required public env vars are missing or malformed.
 */

const URL_PATTERN = /^https?:\/\/.+/;

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `[env] Missing required environment variable: ${key}. ` +
        `Check your .env.local file or Vercel project settings.`,
    );
  }
  return value;
}

function getValidatedUrl(key: string): string {
  const value = getRequiredEnv(key);
  if (!URL_PATTERN.test(value)) {
    throw new Error(
      `[env] ${key} must be a valid HTTP(S) URL, got: "${value}"`,
    );
  }
  return value;
}

let cached: { supabaseUrl: string; supabaseAnonKey: string } | null = null;

export function getSupabaseConfig() {
  if (cached) return cached;

  cached = {
    supabaseUrl: getValidatedUrl("NEXT_PUBLIC_SUPABASE_URL"),
    supabaseAnonKey: getRequiredEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  };
  return cached;
}

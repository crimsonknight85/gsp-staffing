import { createBrowserClient } from "@supabase/ssr";

/**
 * Client-side Supabase browser client.
 *
 * CRITICAL: NEXT_PUBLIC_ env vars MUST be accessed via direct static
 * property access (process.env.NEXT_PUBLIC_*) so Next.js can inline
 * them into the client bundle at build time. Dynamic access like
 * process.env[variableName] will produce undefined in the browser.
 */

// Direct static references — Next.js inlines these at build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "[supabase/client] Missing NEXT_PUBLIC_SUPABASE_URL. " +
      "Add it to .env.local or Vercel environment variables.",
  );
}
if (!supabaseAnonKey) {
  throw new Error(
    "[supabase/client] Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
      "Add it to .env.local or Vercel environment variables.",
  );
}

// After validation these are guaranteed strings
const validatedUrl: string = supabaseUrl;
const validatedKey: string = supabaseAnonKey;

export function createClient() {
  return createBrowserClient(validatedUrl, validatedKey);
}

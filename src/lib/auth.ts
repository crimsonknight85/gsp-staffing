import { createClient } from "@/lib/supabase/server";
import type { User } from "@supabase/supabase-js";

export interface AuthUser {
  user: User;
  email: string;
}

/**
 * Get the authenticated user from the Supabase session.
 * Returns null if not authenticated.
 */
export async function getUser(): Promise<AuthUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return {
    user,
    email: user.email ?? "",
  };
}

/**
 * Require authentication. Returns AuthUser or throws a redirect to /login.
 */
export async function requireAuth(): Promise<AuthUser> {
  const authUser = await getUser();
  if (!authUser) {
    throw new Error("UNAUTHORIZED");
  }
  return authUser;
}

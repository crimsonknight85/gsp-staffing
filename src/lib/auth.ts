import { createClient } from "@/lib/supabase/server";
import type { User } from "@supabase/supabase-js";

export type Role = "admin" | "hr" | "client" | "applicant" | "contractor" | "finance";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
}

export interface Membership {
  id: string;
  organization_id: string;
  org_name: string;
  org_slug: string;
  org_type: "gsp" | "client";
  role: Role;
  status: "active" | "invited" | "suspended" | "removed";
}

export interface AuthUser {
  user: User;
  email: string;
  profile: UserProfile;
  memberships: Membership[];
  primaryRole: Role | null;
  isAdmin: boolean;
}

/**
 * Get the authenticated user with profile and memberships.
 * Returns null if not authenticated.
 */
export async function getUser(): Promise<AuthUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const email = user.email ?? "";

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, avatar_url")
    .eq("id", user.id)
    .single();

  // If no profile row yet, return minimal user with empty memberships
  if (!profile) {
    return {
      user,
      email,
      profile: { id: user.id, email, full_name: null, avatar_url: null },
      memberships: [],
      primaryRole: null,
      isAdmin: false,
    };
  }

  // Fetch active memberships with org details
  const { data: memberships } = await supabase
    .from("organization_memberships")
    .select(
      `
      id,
      role,
      status,
      organization_id,
      organizations (
        id,
        name,
        slug,
        type
      )
    `,
    )
    .eq("user_id", user.id)
    .eq("status", "active");

  const typedMemberships: Membership[] = (memberships ?? []).map((m: RawMembership) => {
    const org = m.organizations?.[0];
    return {
      id: m.id,
      organization_id: org?.id ?? m.organization_id,
      org_name: org?.name ?? "",
      org_slug: org?.slug ?? "",
      org_type: (org?.type ?? "client") as Membership["org_type"],
      role: m.role as Role,
      status: m.status as Membership["status"],
    };
  });

  // Primary role by priority: admin > hr > client > contractor > applicant > finance
  const rolePriority: Role[] = ["admin", "hr", "client", "contractor", "applicant", "finance"];
  const primaryRole =
    typedMemberships
      .map((m) => m.role)
      .sort((a, b) => rolePriority.indexOf(a) - rolePriority.indexOf(b))[0] ?? null;

  return {
    user,
    email,
    profile: {
      id: profile.id,
      email: profile.email,
      full_name: profile.full_name,
      avatar_url: profile.avatar_url,
    },
    memberships: typedMemberships,
    primaryRole,
    isAdmin: primaryRole === "admin",
  };
}

/**
 * Require authentication. Returns AuthUser or throws "UNAUTHORIZED".
 */
export async function requireAuth(): Promise<AuthUser> {
  const authUser = await getUser();
  if (!authUser) throw new Error("UNAUTHORIZED");
  return authUser;
}

/**
 * Require a specific role. Returns AuthUser or throws "FORBIDDEN".
 */
export async function requireRole(allowedRoles: Role[]): Promise<AuthUser> {
  const authUser = await requireAuth();
  if (!authUser.primaryRole || !allowedRoles.includes(authUser.primaryRole)) {
    throw new Error("FORBIDDEN");
  }
  return authUser;
}

/**
 * Get the dashboard route for a role.
 */
export function getDashboardRoute(role: Role): string {
  const routes: Record<Role, string> = {
    admin: "/admin",
    hr: "/hr",
    client: "/client",
    applicant: "/applicant",
    contractor: "/contractor",
    finance: "/finance",
  };
  return routes[role];
}

// ── Internal type for Supabase join result ─────────────────
interface RawMembership {
  id: string;
  role: string;
  status: string;
  organization_id: string;
  organizations: { id: string; name: string; slug: string; type: string }[];
}

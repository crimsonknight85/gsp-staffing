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
  profile: UserProfile;
  memberships: Membership[];
  primaryRole: Role | null;
  isAdmin: boolean;
}

/**
 * Get the fully resolved authenticated user with profile and memberships.
 * Returns null if not authenticated.
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, avatar_url")
    .eq("id", user.id)
    .single();

  // If no profile yet (shouldn't happen — trigger creates it), return minimal
  if (!profile) {
    return {
      user,
      profile: {
        id: user.id,
        email: user.email ?? "",
        full_name: null,
        avatar_url: null,
      },
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

  const typedMemberships: Membership[] = (memberships ?? []).map((m: any) => ({
    id: m.id,
    organization_id: m.organizations?.id ?? m.organization_id,
    org_name: m.organizations?.name ?? "",
    org_slug: m.organizations?.slug ?? "",
    org_type: m.organizations?.type ?? "client",
    role: m.role as Role,
    status: m.status,
  }));

  // Determine primary role: admin > hr > client > contractor > applicant > finance
  const rolePriority: Role[] = ["admin", "hr", "client", "contractor", "applicant", "finance"];
  const primaryRole =
    typedMemberships
      .map((m) => m.role)
      .sort((a, b) => rolePriority.indexOf(a) - rolePriority.indexOf(b))[0] ?? null;

  return {
    user,
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
 * Require authentication. Returns AuthUser or redirects to /login.
 */
export async function requireAuth(): Promise<AuthUser> {
  const authUser = await getAuthUser();
  if (!authUser) {
    throw new Error("UNAUTHORIZED");
  }
  return authUser;
}

/**
 * Require a specific role. Returns AuthUser or redirects to their dashboard.
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

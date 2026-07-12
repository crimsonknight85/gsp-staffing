import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { DashboardShell } from "@/components/dashboard-shell";
import { InviteUserForm } from "@/components/invite-user-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Role } from "@/lib/auth";

export default async function AdminUsersPage() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin"]);
  } catch {
    redirect("/dashboard");
  }

  const supabase = await createClient();

  // Fetch all organizations for the invite form
  const { data: organizations } = await supabase
    .from("organizations")
    .select("id, name")
    .order("name");

  // Fetch all memberships with profile and org info
  const { data: memberships } = await supabase
    .from("organization_memberships")
    .select(
      `
      id,
      role,
      status,
      created_at,
      user_id,
      organization_id,
      profiles!inner(email, full_name),
      organizations!inner(name, slug, type)
    `,
    )
    .order("created_at", { ascending: false })
    .limit(50);

  type MembershipRow = {
    id: string;
    role: Role;
    status: string;
    created_at: string;
    user_id: string;
    organization_id: string;
    profiles: { email: string; full_name: string | null };
    organizations: { name: string; slug: string; type: string };
  };

  const typedMemberships = (memberships ?? []) as unknown as MembershipRow[];

  return (
    <DashboardShell role="admin" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">User Management</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Invite users and manage access
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Invite Form */}
        <div className="lg:col-span-1">
          <InviteUserForm organizations={organizations ?? []} />
        </div>

        {/* User List */}
        <div className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gsp-navy">
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              {typedMemberships.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    No users yet. Invite your first team member.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {typedMemberships.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gsp-navy/10">
                          <span className="text-xs font-bold text-gsp-navy">
                            {(m.profiles.full_name || m.profiles.email || "?")
                              .charAt(0)
                              .toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gsp-navy">
                            {m.profiles.full_name || m.profiles.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {m.profiles.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs font-medium capitalize text-gsp-navy">
                            {m.role}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {m.organizations.name}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            m.status === "active"
                              ? "bg-gsp-success/10 text-gsp-success"
                              : m.status === "invited"
                                ? "bg-gsp-warning/10 text-gsp-warning"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}

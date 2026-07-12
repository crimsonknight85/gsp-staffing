import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export default async function HRDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin", "hr"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="hr" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">HR Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage open roles, candidates, and recruitment pipeline
        </p>
      </div>

      <PhasePlaceholder
        title="Recruitment Pipeline"
        description="Open roles, candidate pipeline, applicant profiles, and interview scheduling will be available here. This is Phase 3 functionality."
      />
    </DashboardShell>
  );
}

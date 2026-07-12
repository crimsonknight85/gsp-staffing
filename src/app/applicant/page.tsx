import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export default async function ApplicantDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin", "hr", "applicant"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="applicant" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">My Applications</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your application status and next steps
        </p>
      </div>

      <PhasePlaceholder
        title="Application Status & Profile"
        description="View your application pipeline, update your profile, and track next steps. This is Phase 3 functionality."
      />
    </DashboardShell>
  );
}

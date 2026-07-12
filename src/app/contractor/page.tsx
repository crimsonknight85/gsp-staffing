import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export default async function ContractorDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin", "hr", "contractor"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="contractor" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">My Workspace</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Assignments, tasks, and timesheets
        </p>
      </div>

      <PhasePlaceholder
        title="Assignments & Time Tracking"
        description="View your assignments, track time, and submit timesheets. This is Phase 4 functionality."
      />
    </DashboardShell>
  );
}

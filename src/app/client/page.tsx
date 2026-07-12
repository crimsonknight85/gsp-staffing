import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export const metadata = { title: "Client Dashboard" };

export default async function ClientDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin", "hr", "client"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="client" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">Client Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your hiring pipeline and contractor assignments
        </p>
      </div>
      <PhasePlaceholder
        title="Hiring Pipeline & Contractor Visibility"
        description="Track candidates through the pipeline, review assigned contractors, and see status updates. This is Phase 3 functionality."
      />
    </DashboardShell>
  );
}

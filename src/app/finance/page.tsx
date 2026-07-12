import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export default async function FinanceDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin", "finance"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="finance" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">Finance Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Billing, invoicing, and payout management
        </p>
      </div>

      <PhasePlaceholder
        title="Billing & Finance"
        description="Invoice summaries, payout estimates, and payment status will be available here. This is Phase 5 functionality and requires separate accounting review."
      />
    </DashboardShell>
  );
}

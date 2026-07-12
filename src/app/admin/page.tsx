import { redirect } from "next/navigation";
import { requireRole, type AuthUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Building2, ShieldCheck } from "lucide-react";

export default async function AdminDashboard() {
  let authUser: AuthUser;
  try {
    authUser = await requireRole(["admin"]);
  } catch {
    redirect("/dashboard");
  }

  return (
    <DashboardShell role="admin" authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">Admin Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Platform configuration and access management
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Building2} label="Organizations" />
        <StatCard icon={Users} label="Active Users" />
        <StatCard icon={Briefcase} label="Client Companies" />
        <StatCard icon={ShieldCheck} label="Audit Events" />
      </div>

      <div className="mt-8">
        <PhasePlaceholder
          title="User & Organization Management"
          description="Invite team members, manage client organizations, and review audit logs. This will be built in the next iteration of Phase 2."
        />
      </div>
    </DashboardShell>
  );
}

function StatCard({
  icon: Icon,
  label,
}: {
  icon: typeof Users;
  label: string;
}) {
  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gsp-navy/5">
            <Icon className="h-5 w-5 text-gsp-navy" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

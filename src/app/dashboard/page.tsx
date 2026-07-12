import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { DashboardShell, PhasePlaceholder } from "@/components/dashboard-shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const authUser = await getUser();

  if (!authUser) {
    redirect("/login");
  }

  return (
    <DashboardShell authUser={authUser}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gsp-navy">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          You&apos;re signed in as {authUser.email}
        </p>
      </div>

      <PhasePlaceholder
        title="Welcome to GSP"
        description="Your dashboard is being prepared. Role-specific views, recruitment tools, and contractor management will appear here in future phases. For now, you can verify that your authentication is working."
      />
    </DashboardShell>
  );
}

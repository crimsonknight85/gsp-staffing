import { redirect } from "next/navigation";
import { getAuthUser, getDashboardRoute } from "@/lib/auth";

/**
 * Role-based dashboard router.
 * Redirects authenticated users to their role's dashboard.
 * Unauthenticated users → /login.
 */
export default async function DashboardRouterPage() {
  const authUser = await getAuthUser();

  if (!authUser) {
    redirect("/login");
  }

  if (!authUser.primaryRole) {
    // Authenticated but no active memberships — show a waiting page
    redirect("/login?error=no_membership");
  }

  redirect(getDashboardRoute(authUser.primaryRole));
}

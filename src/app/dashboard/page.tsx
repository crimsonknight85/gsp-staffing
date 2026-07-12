import { redirect } from "next/navigation";
import { getUser, getDashboardRoute } from "@/lib/auth";

/**
 * Role-based dashboard router.
 * Redirects authenticated users to their role's dashboard.
 * Unauthenticated → /login. Authenticated but no role → /login?error=no_role.
 */
export default async function DashboardRouterPage() {
  const authUser = await getUser();

  if (!authUser) {
    redirect("/login");
  }

  if (!authUser.primaryRole) {
    redirect("/login?error=no_role");
  }

  redirect(getDashboardRoute(authUser.primaryRole));
}

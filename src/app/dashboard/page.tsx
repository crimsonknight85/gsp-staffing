import { redirect } from "next/navigation";
import { getUser, getDashboardRoute } from "@/lib/auth";
import { Logo } from "@/components/logo";
import { LogoutButton } from "@/components/logout-button";
import { AlertCircle } from "lucide-react";

/**
 * Role-based dashboard router.
 * - Unauthenticated → /login
 * - Authenticated but no role → renders stable "Account setup incomplete" page
 * - Authenticated with role → redirects to their role dashboard
 */
export default async function DashboardRouterPage() {
  const authUser = await getUser();

  if (!authUser) {
    redirect("/login");
  }

  // No role — render a stable page (NO redirect, prevents loop)
  if (!authUser.primaryRole) {
    // Debug: log what we got from the DB (server-side only)
    console.error("[dashboard] getUser result:", JSON.stringify({
      email: authUser.email,
      hasProfile: !!authUser.profile,
      membershipCount: authUser.memberships.length,
      memberships: authUser.memberships,
    }, null, 2));

    return (
      <div className="flex min-h-[100dvh] flex-col bg-background">
        <header className="flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-md sm:px-8">
          <Logo />
          <LogoutButton />
        </header>
        <main className="flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-lg">
            <div className="rounded-2xl border border-gsp-warning/30 bg-gsp-warning/5 p-8">
              <div className="flex items-start gap-4">
                <AlertCircle
                  className="h-6 w-6 shrink-0 text-gsp-warning"
                  aria-hidden="true"
                />
                <div>
                  <h1 className="text-lg font-semibold text-gsp-navy">
                    Account setup incomplete
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    You&apos;re signed in as{" "}
                    <strong>{authUser.email}</strong>, but your account
                    hasn&apos;t been assigned to an organization yet.
                  </p>
                  {/* Temporary debug info — will be removed once issue is resolved */}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-xs text-muted-foreground">
                      Debug info
                    </summary>
                    <pre className="mt-2 overflow-auto rounded bg-background p-3 text-xs">
                      {JSON.stringify({
                        email: authUser.email,
                        hasProfile: !!authUser.profile,
                        membershipCount: authUser.memberships.length,
                      }, null, 2)}
                    </pre>
                  </details>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Contact{" "}
                    <a
                      href="mailto:info@globalstaffingpartners.work"
                      className="text-gsp-terracotta underline hover:no-underline"
                    >
                      info@globalstaffingpartners.work
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  redirect(getDashboardRoute(authUser.primaryRole));
}

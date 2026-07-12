import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoutButton } from "@/components/logout-button";
import type { AuthUser } from "@/lib/auth";
import { LogOut, ArrowLeft, Mail } from "lucide-react";

export function DashboardShell({
  authUser,
  children,
}: {
  authUser: AuthUser;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden text-sm text-muted-foreground hover:text-gsp-terracotta sm:inline"
          >
            View public site
          </Link>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gsp-navy/10">
              <span className="text-xs font-bold text-gsp-navy">
                {authUser.email.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:inline max-w-[200px] truncate">
              {authUser.email}
            </span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-10">{children}</main>
    </div>
  );
}

/**
 * Empty state placeholder for sections not yet built.
 */
export function PhasePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
      <h2 className="text-lg font-semibold text-gsp-navy">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

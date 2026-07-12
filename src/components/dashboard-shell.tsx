import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoutButton } from "@/components/logout-button";
import type { Role, AuthUser } from "@/lib/auth";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
  BarChart3,
  Clock,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  icon: typeof LayoutDashboard;
  href: string;
}

const ROLE_NAV: Record<Role, { label: string; items: NavItem[] }> = {
  admin: {
    label: "Admin Dashboard",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/admin" },
      { label: "Users", icon: Users, href: "/admin/users" },
      { label: "Clients", icon: Briefcase, href: "/admin/clients" },
      { label: "Reports", icon: BarChart3, href: "/admin/reports" },
      { label: "Settings", icon: Settings, href: "/admin/settings" },
    ],
  },
  hr: {
    label: "HR Dashboard",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/hr" },
      { label: "Jobs", icon: Briefcase, href: "/hr/jobs" },
      { label: "Applicants", icon: Users, href: "/hr/applicants" },
      { label: "Contractors", icon: Users, href: "/hr/contractors" },
    ],
  },
  client: {
    label: "Client Dashboard",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/client" },
      { label: "My Jobs", icon: Briefcase, href: "/client/jobs" },
      { label: "Contractors", icon: Users, href: "/client/contractors" },
      { label: "Reports", icon: BarChart3, href: "/client/reports" },
    ],
  },
  applicant: {
    label: "My Applications",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/applicant" },
      { label: "My Profile", icon: Users, href: "/applicant/profile" },
      { label: "Applications", icon: FileText, href: "/applicant/applications" },
    ],
  },
  contractor: {
    label: "My Workspace",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/contractor" },
      { label: "Timesheets", icon: Clock, href: "/contractor/timesheets" },
      { label: "My Profile", icon: Users, href: "/contractor/profile" },
    ],
  },
  finance: {
    label: "Finance Dashboard",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/finance" },
      { label: "Invoices", icon: FileText, href: "/finance/invoices" },
      { label: "Reports", icon: BarChart3, href: "/finance/reports" },
    ],
  },
};

export { ROLE_NAV };

export function DashboardShell({
  role,
  authUser,
  children,
}: {
  role: Role;
  authUser: AuthUser;
  children: React.ReactNode;
}) {
  const config = ROLE_NAV[role];

  return (
    <div className="flex min-h-[100dvh] bg-background">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-card hidden lg:flex lg:flex-col">
        <div className="p-6">
          <Logo />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gsp-terracotta">
            {config.label}
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-4" aria-label="Dashboard navigation">
          {config.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted/50 hover:text-gsp-navy"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gsp-navy/10">
              <span className="text-xs font-bold text-gsp-navy">
                {(authUser.profile.full_name || authUser.email)
                  .charAt(0)
                  .toUpperCase()}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gsp-navy">
                {authUser.profile.full_name || authUser.email}
              </p>
              <p className="text-xs capitalize text-muted-foreground">{role}</p>
            </div>
            <LogoutButton className="text-muted-foreground hover:text-gsp-navy" />
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-md lg:hidden">
          <Logo />
          <details className="relative">
            <summary className="flex cursor-pointer items-center rounded-md p-2 text-muted-foreground hover:bg-muted/50 [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </summary>
            {/* Mobile menu dropdown */}
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-border bg-card p-4 shadow-lg">
              <nav className="space-y-1" aria-label="Mobile dashboard navigation">
                {config.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-gsp-navy"
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="truncate text-xs text-muted-foreground">
                    {authUser.profile.full_name || authUser.email}
                  </span>
                  <LogoutButton />
                </div>
              </div>
            </div>
          </details>
        </header>

        {/* Desktop top bar */}
        <header className="sticky top-0 z-30 hidden items-center justify-between border-b border-border bg-card/80 px-8 py-3 backdrop-blur-md lg:flex">
          <p className="text-sm text-muted-foreground">
            {authUser.memberships[0]?.org_name || "GSP"}
          </p>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-gsp-terracotta"
          >
            View public site
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}

/**
 * Empty state placeholder for dashboard sections not yet built.
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

import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoutButton } from "@/components/logout-button";
import { getDashboardRoute, type Role } from "@/lib/auth";
import type { AuthUser } from "@/lib/auth";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
  BarChart3,
  Clock,
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
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-card hidden lg:flex lg:flex-col">
        <div className="p-6">
          <Logo />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gsp-terracotta">
            {config.label}
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {config.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-muted/50 hover:text-gsp-navy"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            {authUser.profile.avatar_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={authUser.profile.avatar_url}
                alt=""
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gsp-navy/10">
                <Users className="h-4 w-4 text-gsp-navy" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gsp-navy truncate">
                {authUser.profile.full_name || authUser.profile.email}
              </p>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
            <LogoutButton className="text-muted-foreground hover:text-gsp-navy" />
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-md lg:hidden">
          <Logo />
          <LogoutButton />
        </header>

        {/* Desktop top bar */}
        <header className="sticky top-0 z-30 hidden items-center justify-between border-b border-border bg-card/80 px-8 py-3 backdrop-blur-md lg:flex">
          <p className="text-sm text-muted-foreground">
            {authUser.memberships[0]?.org_name || "GSP"}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-gsp-terracotta"
            >
              View public site
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-10">
          {children}
        </main>
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
      <h3 className="text-lg font-semibold text-gsp-navy">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

import { Link, useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import {
  Briefcase,
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  Loader2,
} from 'lucide-react'

const ROLE_CONFIG: Record<string, { label: string; navItems: { label: string; icon: typeof LayoutDashboard; path: string }[] }> = {
  admin: {
    label: 'Admin Dashboard',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/admin' },
      { label: 'Users', icon: Users, path: '/admin/users' },
      { label: 'Clients', icon: Briefcase, path: '/admin/clients' },
      { label: 'Reports', icon: BarChart3, path: '/admin/reports' },
      { label: 'Settings', icon: Settings, path: '/admin/settings' },
    ],
  },
  hr: {
    label: 'HR Dashboard',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/hr' },
      { label: 'Jobs', icon: Briefcase, path: '/hr/jobs' },
      { label: 'Applicants', icon: Users, path: '/hr/applicants' },
      { label: 'Contractors', icon: Users, path: '/hr/contractors' },
    ],
  },
  client: {
    label: 'Client Dashboard',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/client' },
      { label: 'My Jobs', icon: Briefcase, path: '/client/jobs' },
      { label: 'Contractors', icon: Users, path: '/client/contractors' },
      { label: 'Reports', icon: BarChart3, path: '/client/reports' },
    ],
  },
  applicant: {
    label: 'My Applications',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/applicant' },
      { label: 'My Profile', icon: Users, path: '/applicant/profile' },
      { label: 'Applications', icon: FileText, path: '/applicant/applications' },
    ],
  },
  contractor: {
    label: 'My Workspace',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/contractor' },
      { label: 'Timesheets', icon: FileText, path: '/contractor/timesheets' },
      { label: 'My Profile', icon: Users, path: '/contractor/profile' },
    ],
  },
  finance: {
    label: 'Finance Dashboard',
    navItems: [
      { label: 'Overview', icon: LayoutDashboard, path: '/finance' },
      { label: 'Invoices', icon: FileText, path: '/finance/invoices' },
      { label: 'Reports', icon: BarChart3, path: '/finance/reports' },
    ],
  },
}

export default function DashboardShell({
  role,
  children,
}: {
  role: string
  children: React.ReactNode
}) {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const navigate = useNavigate()
  const config = ROLE_CONFIG[role] || ROLE_CONFIG.applicant

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gsp-terracotta" />
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="flex min-h-[calc(100dvh-73px)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white hidden lg:block">
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gsp-terracotta mb-4">
            {config.label}
          </p>
          <nav className="space-y-1">
            {config.navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-gsp-navy"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 w-64 border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="h-8 w-8 rounded-full" />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gsp-navy/10">
                <Users className="h-4 w-4 text-gsp-navy" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gsp-navy truncate">
                {user.name || 'User'}
              </p>
              <p className="text-xs text-slate-400 capitalize">{user.role}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-slate-400 hover:text-gsp-navy"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-50 p-6 lg:p-10">
        {children}
      </main>
    </div>
  )
}

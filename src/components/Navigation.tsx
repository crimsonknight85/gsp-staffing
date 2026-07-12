import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { Menu, X, Briefcase, LogOut, Loader2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { user, isAuthenticated, isLoading, logout } = useAuth()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gsp-navy">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight tracking-tight text-gsp-navy">
              Global Staffing
            </span>
            <span className="text-[10px] font-medium leading-tight tracking-widest uppercase text-gsp-terracotta">
              Partners
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-gsp-navy/5 text-gsp-navy'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-gsp-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
          ) : isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">
                {user.name || 'User'}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-slate-600 hover:text-gsp-navy"
              >
                <LogOut className="mr-1 h-4 w-4" />
                Log out
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-gsp-navy">
                  Log in
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="sm" className="bg-gsp-terracotta hover:bg-[#7A5E3F] text-white transition-all duration-300 hover:-translate-y-0.5">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 text-slate-600 hover:bg-slate-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-gsp-navy/5 text-gsp-navy'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              {isAuthenticated && user ? (
                <>
                  <span className="px-4 text-sm text-slate-600">{user.name}</span>
                  <Button
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => { logout(); setMobileOpen(false); }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full justify-center">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full justify-center bg-gsp-terracotta hover:bg-[#7A5E3F] text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

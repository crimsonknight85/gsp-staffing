import { Link } from 'react-router'
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gsp-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight tracking-tight text-white">
                  Global Staffing
                </span>
                <span className="text-[10px] font-medium leading-tight tracking-widest uppercase text-gsp-terracotta">
                  Partners
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Premium recruitment services. We help you hire with confidence, not compromise.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta">
                  Client Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-400 transition-colors duration-200 hover:text-gsp-terracotta cursor-default">Talent Sourcing</li>
              <li className="text-sm text-slate-400 transition-colors duration-200 hover:text-gsp-terracotta cursor-default">Candidate Vetting</li>
              <li className="text-sm text-slate-400 transition-colors duration-200 hover:text-gsp-terracotta cursor-default">Permanent Recruitment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gsp-terracotta" />
                <span className="text-sm text-slate-400">hello@globalstaffing.partners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gsp-terracotta" />
                <span className="text-sm text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gsp-terracotta" />
                <span className="text-sm text-slate-400">
                  1200 Market Street<br />
                  Suite 400<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Global Staffing Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

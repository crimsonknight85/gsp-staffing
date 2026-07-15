import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/utils";

const FOOTER_LINKS = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Jobs", href: "/jobs" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  audiences: [
    { label: "For Clients", href: "/for-clients" },
    { label: "For Applicants", href: "/for-applicants" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-gsp-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Positioning */}
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Global Staffing Partners helps companies hire, manage, and scale
              high-performing remote talent through seamless recruitment and
              managed staffing support.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Pages
            </h2>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Audiences
            </h2>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.audiences.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gsp-terracotta"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta break-all"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <h2 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h2>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-gsp-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
      ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

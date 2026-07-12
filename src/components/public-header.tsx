"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/utils";

export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-gsp-navy/5 text-gsp-navy"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-gsp-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gsp-navy">
              Log in
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Call
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-muted/50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                  isActive(link.href)
                    ? "bg-gsp-navy/5 text-gsp-navy"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full justify-center min-h-[44px]">
                  Log in
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full justify-center min-h-[44px] bg-gsp-terracotta hover:bg-[#7A5E3F] text-white">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

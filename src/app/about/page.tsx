import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Target,
  Handshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Our Mission & Values",
  description:
    "Global Staffing Partners is a hands-on recruitment and workforce partner built on reliability, clarity, accountability, and long-term partnership.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We deliver what we promise. Consistent communication, dependable candidates, and steady support throughout the engagement.",
  },
  {
    icon: Target,
    title: "Clarity",
    desc: "No jargon, no hidden fees, no confusion. You always know where things stand and what happens next.",
  },
  {
    icon: Handshake,
    title: "Accountability",
    desc: "We own the outcome. If something isn&apos;t working, we fix it — we don&apos;t make excuses.",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Partnership",
    desc: "We&apos;re not here for one transaction. We want to be your staffing partner for years, not weeks.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">About Us</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Practical, relationship-focused staffing support
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Global Staffing Partners helps companies hire, manage, and scale
            high-performing remote talent — without the operational guesswork.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">Our Mission</p>
            <h2 id="mission-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl text-balance">
              Make remote hiring simple, visible, and reliable
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We believe hiring remote talent shouldn&apos;t be a gamble. You
              should know who you&apos;re hiring, why they&apos;re qualified, and
              have confidence they&apos;ll deliver. That&apos;s what we do — we
              make remote hiring work.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">What We Stand For</p>
            <h2 id="values-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">Our values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gsp-navy/5" aria-hidden="true">
                  <v.icon className="h-6 w-6 text-gsp-navy" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gsp-navy">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Want to work together?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a call and let&apos;s talk about how we can help you build your team.
          </p>
          <div className="mt-10">
            <Link href="/contact#book">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

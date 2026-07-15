import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  Eye,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Clients — Hire with Visibility and Accountability",
  description:
    "Slow hiring, unreliable applicants, poor visibility — we solve these. See how GSP helps you hire and manage remote talent with confidence.",
  alternates: { canonical: "/for-clients" },
};

const problems = [
  { icon: Clock, title: "Slow Hiring", desc: "Roles stay open for months. You lose momentum and revenue waiting for the right person." },
  { icon: Users, title: "Unreliable Applicants", desc: "Hundreds of resumes, few qualified. You waste time screening instead of growing." },
  { icon: Eye, title: "Poor Visibility", desc: "You don't know where candidates are in the pipeline or what contractors are doing." },
  { icon: ClipboardList, title: "Too Much Admin", desc: "Timesheets, attendance, reporting — it piles up and distracts from your real work." },
];

const solutions = [
  { icon: Users, title: "Pre-Vetted Shortlists", desc: "You get 3–5 qualified candidates, not a pile of resumes. Each one has been screened and assessed." },
  { icon: Eye, title: "Full Pipeline Visibility", desc: "Always know where candidates stand and what happens next. No chasing recruiters for updates." },
  { icon: ShieldCheck, title: "Accountability", desc: "A dedicated partner who owns the outcome — not someone who disappears after sending resumes." },
  { icon: BarChart3, title: "Managed Reporting", desc: "Time tracking, performance summaries, and status updates delivered on a regular schedule." },
];

export default function ForClientsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">For Clients</p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl text-balance">
            Hire smarter. Manage easier.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We solve the real problems of hiring remote talent — so you can focus on growing your business.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-gsp-terracotta text-white hover:bg-[#7A5E3F] px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-card py-20 lg:py-28" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">The Problem</p>
            <h2 id="problems-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">
              Sound familiar?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <Card key={p.title} className="border-border text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gsp-danger/10" aria-hidden="true">
                    <p.icon className="h-6 w-6 text-gsp-danger" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gsp-navy">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="solution-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">How GSP Helps</p>
            <h2 id="solution-heading" className="text-3xl font-bold text-gsp-navy sm:text-4xl">
              What you get when you work with us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((s) => (
              <Card key={s.title} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gsp-navy/5" aria-hidden="true">
                      <s.icon className="h-6 w-6 text-gsp-navy" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gsp-navy">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsp-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Let&apos;s solve your hiring problem
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Book a 30-minute discovery call. We&apos;ll learn about your needs and recommend the right approach.
          </p>
          <div className="mt-10">
            <Link href="/contact">
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
